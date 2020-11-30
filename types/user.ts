import mongoose, { Document, Model, Schema } from 'mongoose'
import { string, object } from 'joi'
import { DatabaseCampaignType } from './campaign'

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  campaigns: { type: Array, required: true },
  characters: { type: Array, required: true },
  account: { type: String, required: true },
  _id: { type: Schema.Types.ObjectId },
})

export const registerBodySchema = object({
  username: string().min(4).max(25).required(),
  email: string().min(5).max(255).required().email(),
  password: string().min(6).required(),
})

export const loginBodySchema = object({
  email: string().min(5).max(255).required().email(),
  password: string().min(6).required(),
})

export interface DatabaseUserType extends Document {
  _id: string
  email: string
  username: string
  campaigns: Array<DatabaseCampaignType['_id']>
  account: 'premium' | 'free'
  password: string
  characters: Array<number>
}

export interface UserType {
  _id: DatabaseUserType['_id']
  email: DatabaseUserType['email']
  username: DatabaseUserType['username']
  characters: DatabaseUserType['characters']
  campaigns: DatabaseUserType['campaigns']
  account: DatabaseUserType['account']
  errors?: { code: number; message: string }[]
  loading?: boolean
}

let User: Model<DatabaseUserType, {}>

try {
  User = mongoose.model('User')
} catch (error) {
  User = mongoose.model('User', UserSchema, 'users')
}

export default User
