import React, { Component } from 'react'
import Item from '../Item/index';

export default class List extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => <Item key={todo.id} {...todo} />)
        }
      </ul>
    )
  }
}
