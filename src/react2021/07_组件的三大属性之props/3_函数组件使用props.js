import React from 'react'
import { PropTypes } from 'prop-types';

const Person = ({ name, age, sex }) => {
  return (
    <ul>
      <li>姓名：{name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{+age + 1}</li>
    </ul>
  )
}

//对标签属性进行类型、必要性的限制
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number,
  speak: PropTypes.func
}
//指定默认标签属性值
Person.defaultProps = {
  sex: "不男不女",
  age: 18
}

export default Person
