import { Router } from 'express'

import * as userController from 'controllers/users.controller'

import Users from 'models/User'

const routes = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      required:
 *        - name
 *        - username
 *        - email
 *        - password
 *      properties:
 *         name:
 *          type: string
 *         username:
 *          type: string
 *         email:
 *          type: string
 *         password:
 *          type: string
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users for the app
 */

/**
 * @swagger
 * /users:
 *  get:
 *    tags: [Users]
 *    summary: Returns the list of users
 *    responses:
 *      200:
 *        description: returns all Users
 */
routes.get('/', userController.getUsers)

// routes.get('/', (req, res) => {
//   Users.find({}, (err: any, result: any) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(result)
//     }
//
//   })
// })

/**
 * @swagger
 * /books/{id}:
 *  get:
 *    summary: Get user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 */
routes.get('/:id', (req, res) => {
  Users.find({}, (err: any, result: any) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

/**
 * @swagger
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
