const inititalState = {
  counter: 99
}

// reducer: harus pure function, immutable
const counterReducer = (state=inititalState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let newCounter = state.counter + action.payload.step
      return {...state, counter: newCounter}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    default:
      return state
  }
}

export default counterReducer
