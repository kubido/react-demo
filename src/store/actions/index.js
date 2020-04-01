
import {
  add_todo
} from './action_types'

// object atau function yg me-return object
export const addTodo = (text) => ({
  type: add_todo,
  payload: {
    todo: {
      id: Math.round(Math.random() *100),
      text
    }
    
  }
})

