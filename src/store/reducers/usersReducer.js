
const defaultState = {
  users: []
}

const usersReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload.users }
    default:
      return state
  }

}


export default usersReducer
