import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

class Person extends Component {
  //对标签属性进行类型、必要性的限制
static propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number,
  speak: PropTypes.func
}
//指定默认标签属性值
static defaultProps = {
  sex: "不男不女",
  age: 18
}
  render() {
    const { name, age, sex } = this.props
    //props是只读的
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