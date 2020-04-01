import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store'

import {
  Home,
  DetailTodo
} from './pages'


// HOC = High Order Component
const App = () => (
  <Provider store={store}>

    <Router>
      <Switch>
        <div  style={{margin: '2em auto', width: '700px'}}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/todo/:todoId">
            <DetailTodo/>
          </Route>
        </div>
      </Switch>
    </Router>

  </Provider>

)
export default App