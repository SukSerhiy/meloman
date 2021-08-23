import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import './index.css'
import Routes from './ui/Routes/Routes'
import configureStore from './configureStore'

const { persistor, store } = configureStore()

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
