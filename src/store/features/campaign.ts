import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CampaignType } from 'types/campaign'

const initialState: CampaignType = {
  _id: null,
  adventures: [],
  gamemaster: null,
  name: null,
}

const campaignSlice = createSlice({
  initialState,
  name: 'campaign',
  reducers: {},
  extraReducers: (builder) => {},
})

export default campaignSlice.reducer
