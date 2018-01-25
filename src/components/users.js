import React, { Component } from 'react'
import { connect } from 'react-redux'

import { add_user, fetch_users_from_api } from '../actions/userAction'

class User extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
    }

  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    return(
      <div>
        <input type="text" onChange={ (e) => this.setState({name: e.target.value })}/>
        <button onClick={ () => this.props.tambahUser({name: this.state.name}) }> ADD USER </button>
        <h1>Users from API</h1>
        <ul>
          { this.props.listUser.map( (user,idx) => {
            return <li key={idx} >{ user.name }</li>
          })}
        </ul>
      </div>
    )
  }
}

// state eq_to store.getState()
const mapStateToProps = (state) => {
  return{
    listUser: state.userReducer.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    tambahUser: (username) => dispatch(add_user(username)),
    fetchUsers: () => dispatch(fetch_users_from_api())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)


