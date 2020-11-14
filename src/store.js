import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import middleware from './middlewares/middleware'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(
      applyMiddleware(
        thunk,
        middleware
      )
    ))

  const  persistor = persistStore(store)

  return { persistor, store }
}
