# Redux Example
this app contain example for doing incrementing a number and add
username using multiple reducers
## How to using store enhancer within react-redux
* enhance can contain middleware, time-travel, persistence data, etc. in this example we will use a middleware `redux-thunk` and `redux-logger`
### using `applyMiddleware`, redux-thunk & redux-logger example
  ```js
  // store.js
  // use applyMiddleware
  import { import { createStore, combineReducers, applyMiddleware, compose } from 'redux' }
  import thunk from 'redux-thunk'
  import logger from 'redux-logger'
  
  const middleware = applyMiddleware(thunk, logger)
  const store = createStore(reducers, middleware)
  
  ```
  ```js
  // user_actions.js
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

  ```
### using `compose`, redux-devtools example
```js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
...
const middleware = applyMiddleware(thunk, logger)
const enhancer = composeEnhancers(middleware)
const store = createStore(reducers, enhancer)
```
  