import dotenv from 'dotenv'
import { PORT } from './contants'

dotenv.config()

export const config = {
  mongo: {
    url: process.env.MONGO_DB || '',
  },
  server: {
    port: PORT,
  },
}
