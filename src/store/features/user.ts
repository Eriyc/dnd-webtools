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
      state = { ...action.payload }
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
