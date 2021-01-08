import React, { Component } from 'react'
import "./App.css"
import Header from './Header/index';
import List from './List/index';
import Footer from './Footer/index';
import axios from 'axios';

export class App extends Component {
  //状态在哪里，操作状态的方法就在哪里

  state = {
    todos: [
      { id: '001', name: '买牛奶', isDone: false },
      { id: '002', name: '睡觉', isDone: false },
      { id: '003', name: '打代码', isDone: false },
      { id: '004', name: '逛街', isDone: false },
    ]
  }

  addTodo = todo => { this.setState({ todos: [todo, ...this.state.todos] }) }

  toggleTodo = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) return { ...todo, isDone: !todo.isDone }
      return todo
    })
    this.setState({ todos })
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  checkAllTodos = () => {
    const todos = this.state.todos.map(todo => ({ ...todo, isDone: !todo.isDone }))
    this.setState({ todos })
  }

  clearAllDone = () => {
    const todos = this.state.todos.filter(todo => !todo.isDone)
    this.setState({ todos })
  }

  getStudentData = () => {
    axios.get('http://localhost:3000/students')
      .then(response => console.log(response.data))
      .then(error => console.log(error))
  }

  getCarData = () => {
    axios.get('http://localhost:3000/cars')
      .then(response => console.log(response.data))
      .then(error => console.log(error))
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} />
        </div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}

export default App
