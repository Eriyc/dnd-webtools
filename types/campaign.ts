import { string } from 'joi'
import mongoose, { Document, Schema } from 'mongoose'
import { UserType } from './user'

export interface CampaignType extends Document {
  name: string
  owner: UserType['_id']
}

const campaignSchema = new Schema({
  name: { type: string, required: true },
  gamemaster: { type: Schema.Types.ObjectId, required: true },
})

export default mongoose.model<CampaignType>('Campaign', campaignSchema)
