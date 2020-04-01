import {
  add_todo
} from '../actions/action_types'

const defaultState = {
  todos: [
    {id: 1, text: "Makan"},
    {id: 2, text: "Minum"},
  ]
}


const todoReducer = (state=defaultState, action) => {
  
  switch (action.type) {
    case add_todo:
      // gak boleh pake push
      // karena mutable.. harus pake yg immutable
      let newTodos = state.todos.concat(action.payload.todo)
      console.log('---masuk sini', newTodos);
      
      return {...state, todos: newTodos}

    default:
      return state
  }

}


export default todoReducer
