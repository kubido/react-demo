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
    <div className="rounded-md my-5 p-5 border border-gray-300 shadow-lg">
      <input
        className="border rounded-md border-aqua mr-5 px-3 py-1"
        onChange={(e) => setText(e.target.value)} />

      <button
        className="border rounded-md border-blue mr-5 bg-blue-300 text-gray-800 px-3 py-1"
        onClick={() => dispatch(addTodo(text))} > Add </button>
      <div className="border-t border-aqua mt-6" />
      <h1 className="text-3xl my-3"> Todos </h1>
      {todos.map((todo, idx) => (
        <div key={idx} >
          <Link

            to={`/todo/${todo.id}`}
          >
            <span className="text-lg">{todo.text}</span>
          </Link>
        </div>
      ))}
    </div>

  )
}

export default Home

