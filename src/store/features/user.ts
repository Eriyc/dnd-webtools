import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserType } from 'types/user'
import jwt from 'jsonwebtoken'

export const authenticateUser = createAsyncThunk('user/login', async (credentials: { email: string; password: string }, thunkApi) => {
  try {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      const error = await response.json()
      return thunkApi.rejectWithValue({ error: error.error, type: error.type })
    }
    const json = await response.json()
    return jwt.verify(json.token, process.env.NEXT_PUBLIC_SECRET, (err, decode) => {
      if (!err) {
        return decode as UserType
      } else return thunkApi.rejectWithValue(err)
    })
  } catch (error) {
    return thunkApi.rejectWithValue({ error: error.message })
  }
})

export const registerUser = createAsyncThunk('user/register', async (credentials: { email: string; password: string; username: string }, thunkApi) => {
  const response = await fetch('/api/user/register', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    const error = await response.json()
    return thunkApi.rejectWithValue({ error: error.error })
  }
  const json = await response.json()
  return jwt.verify(json.token, process.env.NEXT_PUBLIC_SECRET, (err, decode) => {
    if (err) return thunkApi.rejectWithValue(err)
    else return decode
  })
})

const initialState: UserType = {
  _id: null,
  email: null,
  username: null,
  account: 'free',
  campaigns: [],
  errors: null,
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        delete state.errors
        state.loading = true
        return state
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state = { ...((action.payload as unknown) as UserType) }
        state.loading = false
        return state
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.errors = [{ code: 400, message: action.error.message }]
        state.loading = false
        return state
      })
  },
})

export default userSlice.reducer
