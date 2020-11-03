import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Home = () => (
  <ul className="flex flex-row bg-blue-200 rounded-xl px-3 py-3">
    <li>
      <NavLink
        exact
        to="/"
        className="px-2 py-1 mx-2 "
        activeClassName="bg-yellow-300">
        Todo
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/users"
        className="px-2 py-1 mx-2"
        activeClassName="bg-yellow-300"
        data-testid="user-page-btn">
        Users
      </NavLink>
    </li>
  </ul>
)

export default Home