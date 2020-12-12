import React, { Component } from 'react'
import Todos from './Todos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, content: '买菜' },
        { id: 2, content: '买肉' },
        { id: 3, content: '做饭' }
      ]
    }
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">任务列表</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
