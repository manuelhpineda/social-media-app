import { Router } from 'express'

import users from './users'

const routes = Router()

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
routes.get('/', (req, res) => {
  res.send('hello world')
})

routes.use('/users', users)

export default routes
