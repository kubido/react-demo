import React, { Component } from 'react'
import { connect } from 'react-redux'

import { add_user } from '../actions/userAction'

class User extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
    }

  }

  render(){
    return(
      <div>
        <input type="text" onChange={ (e) => this.setState({name: e.target.value })}/>
        <button onClick={ () => this.props.tambahUser(this.state.name) }> ADD USER </button>
        <ul>
          { this.props.listUser.map( (user_name,idx) => {
            return <li key={idx} >{ user_name }</li>
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
    tambahUser: (username) => dispatch(add_user(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)


