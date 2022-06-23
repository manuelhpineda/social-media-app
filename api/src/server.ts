import 'module-alias/register'
import 'dotenv/config'
import express, { Express } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { PORT } from 'config/contants'
import swaggerDocs from 'config/swagger'
import { handleError } from 'middleware'
import { RouteNotFoundError } from 'errors'
import routes from 'routes/v1'

mongoose.connect(`${process.env.MONGO_DB}`)
const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongo database connection established successfully')
})
connection.on('error', (error) => {
  console.log('Mongo databse connection failed: -> ', error)
})

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

swaggerDocs(app)
app.use(routes)
app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)))
app.use(handleError)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
