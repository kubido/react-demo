import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import {
  TodosReducer,
  UsersReducer
} from './reducers'

const reducers = combineReducers({
  listPekerjaan: TodosReducer,
  UsersReducer
})

const middleware = applyMiddleware(thunk)

const store = createStore(reducers, middleware)

export default store


// 1. store
// 2. reducer
// 3. action