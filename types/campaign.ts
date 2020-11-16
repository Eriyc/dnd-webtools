import mongoose, { Document, Schema } from 'mongoose'
import { UserType } from './user'

export interface DatabaseCampaignType extends Document {
  _id: string
  name: string
  gamemaster: UserType['_id']
  adventures: Array<object>
}

const campaignSchema = new Schema({
  name: { type: String, required: true },
  gamemaster: { type: Schema.Types.ObjectId },
  adventures: { type: Array, required: true },
})

export default mongoose.model<DatabaseCampaignType>('Campaign', campaignSchema)
