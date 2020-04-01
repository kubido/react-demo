import { 
  createStore,
  combineReducers
} from 'redux'

import {
  TodosReducer,
  ProductsReducer
} from './reducers'

const reducers = combineReducers({
  listPekerjaan: TodosReducer,
  ProductsReducer
})



const store = createStore(reducers)

export default store


// 1. store
// 2. reducer
// 3. action