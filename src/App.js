import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './stores'
import { increment_action } from './actions/counterAction'
import { add_user } from './actions/userAction'

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: "Hello world",
      counter: store.getState().counterReducer.counter,
      name: '',
      users: store.getState().userReducer.users
    }

    store.subscribe( () => {
      this.setState({
        counter: store.getState().counterReducer.counter,
        users: store.getState().userReducer.users
      })
    })
  }


  render() {
    return (
      <div className="App">
          <h1>Counter: {this.state.counter} </h1>
          <button onClick={ () => store.dispatch(increment_action(10))} >INC</button>
          <button onClick={ () => store.dispatch({ type: 'DECREMENT' })}>DEC</button>
          <hr/>
          <input type="text" onChange={ (e) => this.setState({name: e.target.value })}/>
          <button onClick={ () => store.dispatch(add_user(this.state.name))}> ADD USER </button>
          <ul>
            { this.state.users.map( (user_name,idx) => {
              return <li key={idx} >{ user_name }</li>
            })}
          </ul>
      </div>
    );
  }
}

export default App;
