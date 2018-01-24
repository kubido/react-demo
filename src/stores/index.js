import { createStore, combineReducers } from 'redux'

import counterReducer from '../reducers/counterReducer'
import userReducer from '../reducers/userReducer'

const reducers = combineReducers({
  counterReducer,
  userReducer
})

const store = createStore(reducers)

export default store

