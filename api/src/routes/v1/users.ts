import { Router } from 'express'
import Users from '../../models/Users'

const routes = Router()

routes.get('/', (req, res) => {
  Users.find({}, (err: any, result: any) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

export default routes
