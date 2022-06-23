import User from 'models/User'

export const getAllUsers = async () => {
  return User.find()
}
