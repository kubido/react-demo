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
      <Provider store={store} >
        <div className="App" style={styles.container}>
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

const styles = {
  container: {
    width: '960px',
    margin: '0 auto'
  }
}

export default App;
