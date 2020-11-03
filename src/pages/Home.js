import React, { useState } from 'react'
import {
  Link
} from 'react-router-dom'
import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  addTodo
} from '../store/actions'

const Home = () => {

  const [text, setText] = useState('')
  const todos = useSelector(state => state.listPekerjaan.todos)
  const dispatch = useDispatch()


  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodo(text))}> Add </button>

      <h1 className=""> homepage </h1>
      <h1> homepage 1 </h1>
      <h1> homepage 2 </h1>
      <h1> homepage 3 </h1>
      {todos.map((todo, idx) => (
        <div key={idx} >
          <Link

            to={`/todo/${todo.id}`}
          >
            {todo.text}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home

