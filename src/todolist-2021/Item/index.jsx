import React, { Component } from 'react'

export default class Item extends Component {

  state = { mouse: false }

  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  render() {
    const { id, name, isDone } = this.props
    const { mouse } = this.state
    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}>
        <label >
          <input type="checkbox" defaultChecked={isDone} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
