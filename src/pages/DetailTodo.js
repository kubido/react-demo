import React from 'react'
import {
  useParams,
  Link
} from 'react-router-dom'

import { 
  useSelector
} from 'react-redux'

const DetailTodo = () => {
  const params = useParams()

  const todos = useSelector( state => state.listPekerjaan.todos)
  console.log(todos);
  
  const todo = todos.find(t => t.id == params.todoId)

  return(
    <div>
      <Link to="/"> {`<`} Home </Link>
      <h1>{ todo.text }</h1>
    </div>
  )
}

export default DetailTodo