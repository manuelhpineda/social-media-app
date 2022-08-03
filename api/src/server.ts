import 'module-alias/register'
import 'dotenv/config'
import express, { Express } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan'

import { config } from 'config/config'
import swaggerDocs from 'config/swagger'
import { handleError } from 'middlewares'
import { RouteNotFoundError } from 'errors'
import routes from 'routes/v1'

mongoose
  .connect(`${process.env.MONGO_DB}`, {
    retryWrites: true,
    w: 'majority',
  })
  .then((r) => {
    console.log('Mongo database connection established successfully')
  })
  .catch((err) => {
    console.log('Mongo database connection failed: -> ', err)
  })

/*
const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongo database connection established successfully')
})
connection.on('error', (error) => {
  console.log('Mongo database connection failed: -> ', error)
})
*/

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

swaggerDocs(app)
app.use(routes)
app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)))
app.use(handleError)

app.listen(config.server.port, () => {
  console.log(`Server is running at http://localhost:${config.server.port}`)
})
