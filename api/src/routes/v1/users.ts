import { Router } from 'express'
import Users from '../../models/Users'

const routes = Router()

/**
 * @openapi
 * /users:
 *  get:
 *    tags:
 *    - Users
 *    description: Gets all Users
 *    responses:
 *      200:
 *        description: returns all Users
 */
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
