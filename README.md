# Redux Example
this app contain example for doing incrementing a number and add
username using multiple reducers
## How to React Redux
* wrap your parent component with `Provider` component 
  ```js
  <Provider store={store}/>...</Provider>
  ```
* connect your component using `connect`
  ```js
    import {add_user} from '../actions/user_actions'
    
    class MyComponent extends React.Component{
      ...
    }
    
    
    const mapStateToProps = (state) => {
      return{
        listUser: state.UserReducer.users
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return{
        addUser: (name) => dispatch(add_user(name))
      }
    }
    connect(mapStateToProps, mapDispatchToProps)(MyComponent)
  ```
