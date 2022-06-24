import { object, string, TypeOf } from 'zod'

/**
 * @openapi
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: test@example.com
 *        password:
 *          type: string
 *          default: password
 *    CreateUsersResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

/**
 * @openapi
 * tags:
 *  name: User
 *  description: The users for the app
 */

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(4, 'Password is too short - 6 characters required'),
  }),
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, any>
