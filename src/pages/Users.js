import React, { useEffect } from 'react'

import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  fetchUsers
} from '../store/actions'

export default () => {
  const users = useSelector(state => state.UsersReducer.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h1> Users page</h1>
      {users.map(u => (
        <p key={u.id}>{u.id}. {u.name}</p>
      ))}
    </div>
  )
}