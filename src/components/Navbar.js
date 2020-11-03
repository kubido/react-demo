import React from 'react'
import {
  Link
} from 'react-router-dom'

export default () => (
  <ul>
    <li> <Link to="/"> Todo </Link>  </li>
    <li> <Link to="/users" data-testid="user-page-btn">Users</Link> </li>
  </ul>
)
