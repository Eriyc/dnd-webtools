import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
const persistor = persistStore(store)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

export default { store, persistor }
