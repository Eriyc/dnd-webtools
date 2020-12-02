import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './features/user'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import characterReducer from './features/character'

const persistOpts = {
  key: 'user',
  storage,
}

const persistedUser = persistReducer(persistOpts, userReducer)

const rootReducer = combineReducers({
  user: persistedUser,
  character: characterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
