import { catchErrors } from '../errors'
import { getAllUsers } from 'services'

export const getUsers = catchErrors(async (req, res) => {
  const users = await getAllUsers()
  res.send(users)
})
