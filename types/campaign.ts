import mongoose, { Document, Model, Schema } from 'mongoose'
import { UserType } from './user'

export interface DatabaseCampaignType extends Document {
  _id: string
  name: string
  gamemaster: UserType['_id']
  adventures: Array<object>
}

const CampaignSchema = new Schema({
  name: { type: String, required: true },
  gamemaster: { type: Schema.Types.ObjectId },
  adventures: { type: Array, required: true },
})

export interface CampaignType {
  _id: DatabaseCampaignType['_id']
  name: DatabaseCampaignType['name']
  gamemaster: DatabaseCampaignType['gamemaster']
  adventures: DatabaseCampaignType['adventures']
}

let Campaign: Model<DatabaseCampaignType, {}>

try {
  Campaign = mongoose.model('Campaign')
} catch (error) {
  Campaign = mongoose.model('Campaign', CampaignSchema, 'campaigns')
}

export default Campaign
