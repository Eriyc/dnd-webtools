import mongoose, { Document, Model, Schema } from 'mongoose'
import { CampaignType } from './campaign'
import Joi from 'joi'

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  campaigns: { type: Array, required: true },
  account: { type: String, required: true },
})

export const registerBodySchema = Joi.object({
  username: Joi.string().min(4).max(25).required(),
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(6).required(),
})

export const loginBodySchema = Joi.object({
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(6).required(),
})

export interface DatabaseUserType extends Document {
  _id: string
  email: string
  username: string
  campaigns: Array<CampaignType>
  account: 'premium' | 'free'
  password: string
}

export interface UserType {
  _id: DatabaseUserType['_id']
  email: DatabaseUserType['email']
  username: DatabaseUserType['username']
  campaigns: DatabaseUserType['campaigns']
  account: DatabaseUserType['account']
}

let User: Model<DatabaseUserType, {}>

try {
  User = mongoose.model('User')
} catch (error) {
  User = mongoose.model('User', UserSchema, 'users')
}

export default User
