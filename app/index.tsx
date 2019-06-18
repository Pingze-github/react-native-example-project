
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import Navigation from './navigation'
import configureStore from './store'

const { store, persistor } = configureStore()

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    )
  }
}

// export default Navigation
