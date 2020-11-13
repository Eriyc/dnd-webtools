import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'types/user'

const initialState: UserType = {
  _id: null,
  email: null,
  username: null,
  account: 'free',
  campaigns: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      const { _id, account, campaigns, email, username } = action.payload
      state = { _id, account, campaigns, email, username }
      console.log('State update:', action.payload, 'new state', state)
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
