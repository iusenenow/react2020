import React, { Component } from 'react'

export default class Footer extends Component {

  handleCheckAll = () => this.props.checkAllTodos()

  handleClearAllDone = () => this.props.clearAllDone()

  render() {
    const { todos } = this.props
    //总数
    const total = todos.length
    //已完成的个数
    const isDoneCount = todos.reduce((pre, todo) => pre + (todo.isDone ? 1 : 0), 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={isDoneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成：{isDoneCount}</span> / 全部：{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
