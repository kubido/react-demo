import React from 'react'

import {
  Link
} from 'react-router-dom'
import {
  connect
} from 'react-redux'

import {
  addTodo
} from '../store/actions'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.setState({ text: e.target.value })} />

        <h1 data-testid="homepage-title"> homepage </h1>
        <h1> homepage 1 </h1>
        <h1> homepage 2 </h1>
        <h1> homepage 3 </h1>

        <button onClick={() => this.props.tambah(this.state.text)}> Add </button>
        {this.props.tugas.map((todo, idx) => (
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
}

const mapStateToProps = (state) => {
  return {
    tugas: state.listPekerjaan.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambah: (text) => dispatch(addTodo(text))
  }
}

// currying
export default connect(mapStateToProps, mapDispatchToProps)(Home)


