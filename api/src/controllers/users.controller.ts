import { catchErrors } from 'errors'
import * as userService from 'services/user.services'

export const createUser = catchErrors(async (req, res) => {
  const user = await userService.createUser(req.body)
  res.status(201).send(user)
})

export const getUsers = catchErrors(async (req, res) => {
  const users = await userService.getAllUsers()
  res.send(users)
})
