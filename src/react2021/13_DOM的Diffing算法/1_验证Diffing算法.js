import React, { Component } from 'react'

export default class Time extends Component {
  state = { date: new Date() }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" />
        <span>现在是：{this.state.date.toTimeString()}
          <input type="text" />
        </span>
      </div>
    )
  }
}
