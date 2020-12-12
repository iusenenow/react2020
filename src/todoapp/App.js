import React, { Component } from 'react'
import Todos from './Todos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, content: '买东西' },
        { id: 2, content: '浇花' },
        { id: 3, content: '洗碗' }
      ]
    }
  }

  deleteTodo = id => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: [...filteredTodos] })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">任务列表</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
