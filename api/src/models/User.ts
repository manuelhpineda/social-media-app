import { Document, Model, model, Schema } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

import { BadUserInputError } from 'errors'

interface IProfile {
  name?: string
  gender?: string
  location?: string
  picture?: string
}

export interface IUser {
  username: string
  email: string
  password: string
  passwordResetToken?: string
  passwordResetExpires?: string
  profile: IProfile
}

interface IUserDocument extends IUser, Document {
  setPassword: (password: string) => Promise<void>
}

interface IUserModel extends Model<IUserDocument> {
  isEmailTaken: (email: string, excludeUserId: string) => Promise<IUserDocument>
}

const UserSchema = new Schema<IUserDocument>({
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
  passwordResetToken: String,
  passwordResetExpires: Date,

  profile: {
    name: String,
    gender: String,
    location: String,
    picture: String,
  },
})

UserSchema.methods.setPassword = async function (password: string) {
  this.password = await bcrypt.hash(password, 10)
}

UserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } })
  return !!user
}

const User = model<IUserDocument, IUserModel>('User', UserSchema)

export default User
