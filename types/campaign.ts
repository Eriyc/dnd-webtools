import { string } from 'joi'
import mongoose, { Document, Schema } from 'mongoose'
import { UserType } from './user'

export interface DatabaseCampaignType extends Document {
  _id: string
  name: string
  gamemaster: UserType['_id']
  visited: Array<string>
}

const campaignSchema = new Schema({
  name: { type: string, required: true },
  gamemaster: { type: Schema.Types.ObjectId },
})

export default mongoose.model<DatabaseCampaignType>('Campaign', campaignSchema)
