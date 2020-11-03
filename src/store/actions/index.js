
import {
  add_todo
} from './action_types'

// object atau function yg me-return object
export const addTodo = (text) => ({
  type: add_todo,
  payload: {
    todo: {
      id: Math.round(Math.random() * 100),
      text
    }
  }
})

export const fetchUsers = () => {
  let url = 'https://jsonplaceholder.typicode.com/users'
  return (dispatch) => {
    fetch(url)
      .then(resp => {
        return resp.json()
      })
      .then(users => {
        dispatch({
          type: 'FETCH_USERS',
          payload: {
            users: users.slice(0, 10)
          }
        })
      })
  }
}

