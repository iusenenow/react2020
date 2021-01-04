import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import Item from '../Item/index';

export default class List extends Component {
  //对接收的props进行类型和必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos ? todos.map(todo => <Item key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />) : <li>没有待办事项</li>}
      </ul>)
  }
}
