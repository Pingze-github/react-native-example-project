
import { createStore, combineReducers } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
