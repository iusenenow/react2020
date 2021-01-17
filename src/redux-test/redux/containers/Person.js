import React, { Component } from 'react'

export default class Person extends Component {

  addPerson = () => {
    const name = this.name.value
    const age = this.age.value
    console.log(name, age);
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <input ref={c => this.name = c} type="text" placeholder="输入名字" />&nbsp;&nbsp;
        <input ref={c => this.age = c} type="text" placeholder="输入年龄" />&nbsp;&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          <li>名字1：年龄1</li>
          <li>名字2：年龄2</li>
          <li>名字3：年龄3</li>
        </ul>
      </div>
    )
  }
}
