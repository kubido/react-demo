import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store'
import Navbar from './components/Navbar'

import {
  Home,
  DetailTodo,
  Users
} from './pages'

import './assets/main.css'

export const AppRouter = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route exact path="/todo/:todoId">
        <DetailTodo />
      </Route>
    </Switch>
  </Provider >


)

// HOC = High Order Component
const App = () => (

  <div style={{ margin: '2em auto', width: '700px' }}>
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  </div>


)
export default App