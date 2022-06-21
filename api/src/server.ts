import 'module-alias/register'
import express, {Express} from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

import {PORT} from 'config/contants';
import routes from 'routes/v1';

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
