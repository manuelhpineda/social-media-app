import { Document, Model, model, Schema } from 'mongoose'

export interface IPost {
  title: string
  author: string
}

export interface IPostModel extends IPost, Document {}

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: true,
  }
)

const Post = model<IPostModel>('Post', PostSchema)

export default Post
