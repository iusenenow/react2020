import React, { Component } from 'react'

export default class Item extends Component {

  state = { mouse: false }

  //鼠标移入、移除回调
  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  //勾选，取消勾选某一个todo的回调
  handleCheck = id => {
    return () => this.props.toggleTodo(id)
  }
  //删除一个todo的回调
  handleDelete = id => {
    console.log(id);
  }

  render() {
    const { id, name, isDone } = this.props
    const { mouse } = this.state

    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{ backgroundColor: mouse ? '#ddd' : '#fff', transition: "all .4s ease-in-out" }}>
        <label >
          <input type="checkbox" defaultChecked={isDone} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li >
    )
  }
}
