import User from 'models/User'

export const createUser = async (userBody: any) => {}

export const getAllUsers = async () => {
  return User.find()
}
