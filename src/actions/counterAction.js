// Action, harus return object

export const increment_action = (step) => ({
  type: 'INCREMENT',
  payload: {
    step
  }
})
