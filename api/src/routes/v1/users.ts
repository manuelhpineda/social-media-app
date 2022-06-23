import { Router } from 'express'
import Users from '../../models/Users'
import User from '../../models/Users'

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

/**
 * @openapi
 * /users:
 *  post:
 *    tags:
 *    - Users
 *    description: Creates a new user.
 *    consumes:
 *    - application/json
 *    parameters:
 *    - in: body
 *      name: user
 *      description: The user to create.
 *      schema:
 *        type: object
 *        required:
 *          - name
 *          - username
 *          - email
 *          - password
 *        properties:
 *          name:
 *            type: string
 *          username:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *    responses:
 *      200:
 *        description: ok
 *
 */
routes.post('/', async (req, res) => {
  const user = req.body
  const newUser = new Users(user)
  await newUser.save()
  res.send(user)
})

export default routes
