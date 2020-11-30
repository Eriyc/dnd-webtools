import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CharacterCreatorState } from 'types/character'

const initialState: CharacterCreatorState = {
  abilities: [
    { name: 'strength', mod: 0, value: 10 },
    { name: 'dexterity', mod: 0, value: 10 },
    { name: 'constitution', mod: 0, value: 10 },
    { name: 'intelligence', mod: 0, value: 10 },
    { name: 'wisdom', mod: 0, value: 10 },
    { name: 'charisma', mod: 0, value: 10 },
  ],
}

const campaignSlice = createSlice({
  initialState,
  name: 'campaign',
  reducers: {},
  extraReducers: () => {},
})

export default campaignSlice.reducer
