import React, { Component } from 'react'
import "./App.css"
import Header from './Header/index';
import List from './List/index';
import Footer from './Footer/index';

export class App extends Component {

  state = {
    todos: [
      { id: '001', name: '买牛奶', isDone: false },
      { id: '002', name: '睡觉', isDone: true },
      { id: '003', name: '打代码', isDone: false }
    ]
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
