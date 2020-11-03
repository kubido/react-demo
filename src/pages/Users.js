import React, { useEffect } from 'react'

import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  fetchUsers
} from '../store/actions'

const User = () => {
  const users = useSelector(state => state.UsersReducer.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="rounded-md my-5 p-5 border border-gray-300">
      <h1 className="text-3xl mb-3"> Users</h1>
      <ol className="list-decimal ml-8">

        {users.length ?
          users.map(u => (
            <li key={u.id}>{u.name}</li>
          ))
          :
          <li> Loading... </li>
        }
      </ol>
    </div>
  )
}
export default User