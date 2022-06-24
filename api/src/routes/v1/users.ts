import { Router } from 'express'

import * as userController from 'controllers/users.controller'
import { createUserSchema } from 'validations/user.schema'
import validateResources from 'middlewares/validateResources'

const routes = Router()

/**
 * @openapi
 * /users:
 *  post:
 *    tags: [User]
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

/**
 * @openapi
 * /users:
 *  get:
 *    tags: [User]
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
 *    tags: [User]
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

routes.delete('/all', userController.deleteAllUsers)

routes.delete('/:id', userController.deleteUser)

export default routes
