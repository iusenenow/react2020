import React, { Component } from 'react'

class Person extends Component {
  render() {
    const { name, age, sex } = this.props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{+age + 1}</li>
      </ul>
    )
  }
}

export default Person
