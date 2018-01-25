import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import store from './stores'
import userStore from './mobx_stores/User'
import { increment_action } from './actions/counterAction'
import { add_user } from './actions/userAction'
import './App.css'

class App extends Component {
  constructor(){
    super()
  }


  render() {
    return (
      <Router>
        <div id="container">
          <ul class="horizontal">
            <li><Link to='/redux' > Redux </Link></li>
            <li><Link to='/mobx' > Mobx </Link></li>
          </ul>
          <Route exact path='/redux' component={Redux}/>
          <Route exact path='/mobx' component={Mobx}/>
        </div>
      </Router>
    );
  }
}


const Mobx = (props) => (
  <div>
    <h1> Mobx </h1>
    <h2>{JSON.stringify(userStore.users)}</h2>
  </div>
)

class Redux extends Component {

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

  render(){
    return(

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
    )
  }
}

export default App;
