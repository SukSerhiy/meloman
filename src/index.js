import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import './index.css'
import Routes from './ui/routes'

import rootReducer from './redux/rootReducer'
import { onRehydrationMiddleware, jwtMiddleware } from './middleware'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    jwtMiddleware,
    onRehydrationMiddleware,
    thunk,
  ],
  devTools: true,
})

const persistor = persistStore(store)

const hashHistory = createHashHistory()

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

export { store }
