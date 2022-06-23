import { Schema, model } from 'mongoose'
import validator from 'validator'

import { BadUserInputError } from 'errors'

interface User {
  name: string
  username: string
  email: string
  password: string
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value: string) {
      if (!validator.isEmail(value)) {
        throw new BadUserInputError({ email: 'Invalid email' })
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    private: true,
  },
})

// UserSchema.statics.isEmailTaken = async (email, excludeUserId) => {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } })
//   return !!user
// }

const User = model('User', UserSchema)

export default User
