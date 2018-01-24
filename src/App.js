import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './stores'
import UserComponent from './components/users'
import { increment_action } from './actions/counterAction'

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: "Hello world",
      counter: store.getState().counterReducer.counter,
    }

    store.subscribe( () => {
      this.setState({
        counter: store.getState().counterReducer.counter,
      })
    })
  }


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Counter: {this.state.counter} </h1>
        <button onClick={ () => store.dispatch(increment_action(10))} >INC</button>
      <button onClick={ () => store.dispatch({ type: 'DECREMENT' })}>DEC</button>
      <hr/>
      <UserComponent/>
    </div>
  </Provider>
    );
  }
}

export default App;
