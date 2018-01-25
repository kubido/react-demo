const inititalState = {
  users: [{
    name: 'John'
  }]
}

const userReducer = (state=inititalState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUsers = state.users.concat(action.payload.name)
      return { ...state, users: newUsers }
    case 'ADD_USERS_FROM_API':
      return { ...state, users: action.payload.users }
    default:
      return state
  }
}


export default userReducer
