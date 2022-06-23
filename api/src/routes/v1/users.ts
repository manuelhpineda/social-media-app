import { Router } from 'express'

import * as userController from 'controllers/users.controller'

const routes = Router()

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

/**
 * @swagger
 * /users/{id}:
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
  res.send('user')
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
routes.post('/', userController.createUser)

export default routes
