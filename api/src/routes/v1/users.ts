import { Router } from 'express'

import * as userController from 'controllers/users.controller'
import { createUserSchema } from 'validation/user.schema'
import validateResources from '../../middleware/validateResources'

const routes = Router()

/**
 * @openapi
 * tags:
 *  name: Users
 *  description: The users for the app
 */

/**
 * @openapi
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
 * @openapi
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
 * @openapi
 * /users:
 *  post:
 *    tags:
 *    - Users
 *    description: Creates a new user.
 *    summary: Register a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUsersResponse'
 *
 */
routes.post('/', validateResources(createUserSchema), userController.createUser)

export default routes
