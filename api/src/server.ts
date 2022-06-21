import express, {Express} from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app: Express = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
