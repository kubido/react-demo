
const defaultState = {
  products: [
    {id: 1, name: "Makan"},
    {id: 2, name: "Minum"},
  ]
}

const productReducere = (state=defaultState, action) => {
  
  switch (action.type) {
    case 'EDIT_PRODUCTS':
      let newProducts = state.products.concat(action.payload.todo)
      console.log('---masuk sini', newProducts);
      
      return {...state, products: newProducts}
    default:
      return state
  }

}


export default productReducere
