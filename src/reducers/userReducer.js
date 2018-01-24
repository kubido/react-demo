const inititalState = {
  users: ['John']
}

const userReducer = (state=inititalState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUsers = state.users.concat(action.payload.name)
      return { ...state, users: newUsers }
    default:
      return state
  }
}


export default userReducer
