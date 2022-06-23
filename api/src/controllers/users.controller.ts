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

export const deleteUser = catchErrors(async (req, res) => {
  const id = req.params.id

  if (id) await userService.deleteUserById(id)

  res.status(200).send('user deleted')
})

export const deleteAllUsers = catchErrors(async (req, res) => {
  await userService.deleteAllUsers()
  res.status(200).send('All users deleted')
})
