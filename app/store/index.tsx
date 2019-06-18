
import { combineReducers, createStore } from 'redux'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

const persistConfig = {
  key: 'root',
  storage,
}

// 以这种自动方式处理，就不会声明State接口了。后续会使用any
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
