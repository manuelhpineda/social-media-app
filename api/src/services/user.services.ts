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

export const deleteUserById = async (id: string) => {
  await User.deleteOne({ _id: id })
  return id
}

export const deleteAllUsers = async () => {
  await User.deleteMany()
}
