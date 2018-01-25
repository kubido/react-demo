import axios from 'axios'

export const add_user = (name) => ({
  type: 'ADD_USER',
  payload: {
    name
  }
})

export const add_users_from_api = (users) => ({
  type: 'ADD_USERS_FROM_API',
  payload: {
    users
  }
})

export const fetch_users_from_api = () => {
  return (dispatch, getState) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    axios.get(apiUrl)
      .then(resp => {
        let allUsers = getState().userReducer.users.concat(resp.data)
        dispatch(add_users_from_api(allUsers))
      })
  }
}
