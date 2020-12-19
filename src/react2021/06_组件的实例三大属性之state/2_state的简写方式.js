import React, { Component } from 'react'

//1.创建Class Component
export default class MyClassComponentEasy extends Component {
  //初始化状态
  state = { isHot: true }
  //自定义方法——要用赋值语句的形式+箭头函数
  changeWeather = () => {
    this.setState({ isHot: !this.state.isHot })
  }

  render() {
    return <h1 onClick={this.changeWeather}>今天天气很{this.state.isHot ? '炎热。' : '凉爽。'}</h1>
  }
}
