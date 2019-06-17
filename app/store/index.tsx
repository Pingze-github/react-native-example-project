
import { combineReducers, createStore } from 'redux'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}
