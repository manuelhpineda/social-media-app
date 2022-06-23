import User from 'models/User'
import { ConflictFoundError } from 'errors'

export const createUser = async (userBody: any) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ConflictFoundError('Email is already taken')
  }
  return User.create(userBody)
}

export const getAllUsers = async () => {
  return User.find()
}
