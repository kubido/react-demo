# Redux Example
this app contain example for doing incrementing a number and add
username using multiple reducers

## How to Redux
### Setup
* create a [store](https://redux.js.org/docs/api/createStore.html) 
* create [reducer](https://redux.js.org/docs/basics/Reducers.html), since store need a reducer you need to create reducer, reducer is pure function, and the state inside is immutable 
* create [action](https://redux.js.org/docs/basics/Actions.html), action should return object 

### Implementation
* display value from store using [`store.getState()`](https://redux.js.org/docs/api/Store.html#getState)
* dispatch action using [`store.dispatch(action_object)`](https://redux.js.org/docs/api/Store.html#dispatch)
* listen to store changes using [`store.subscribe()`](https://redux.js.org/docs/api/Store.html#subscribe)
