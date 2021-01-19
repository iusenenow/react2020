import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../actions/person';

class Person extends Component {

  addPerson = () => {
    const name = this.name.value
    const age = this.age.value
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    this.name.value = 0
    this.age.value = 0
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>上方组件求和为{this.props.count}</h4>
        <input ref={c => this.name = c} type="text" placeholder="输入名字" />&nbsp;&nbsp;
        <input ref={c => this.age = c} type="text" placeholder="输入年龄" />&nbsp;&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.people.map(person => <li key={person.id}>{person.name}：{person.age}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    people: state.people,
    count: state.count
  }),
  { addPerson }
)(Person)