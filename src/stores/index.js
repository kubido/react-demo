import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import counterReducer from '../reducers/counterReducer'
import userReducer from '../reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  counterReducer,
  userReducer
})

const middleware = applyMiddleware(thunk, logger)
const enhancer = composeEnhancers(middleware)
const store = createStore(reducers, enhancer)

export default store

