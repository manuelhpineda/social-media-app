import 'module-alias/register'
import express, {Express} from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

import routes from 'routes/v1';

dotenv.config()

const app: Express = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
