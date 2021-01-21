import React, { Component } from 'react'
import "./index.css"


const MyContext = React.createContext()
const { Provider, Consumer } = MyContext


export default class Demo extends Component {

  state = { username: 'Tom', age:16 }

  render() {
    const {username, age} = this.state
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{this.state.username}</h4>
        <Provider value={{username, age}}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  static contextType = MyContext
  render() {
    const {username, age} = this.context
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>我从A组建接收到的用户名是：{username}，我的年龄是：{age}</h4>
        <C />
      </div>
    )
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    console.log(this, this.context);
    return (
      <div className="grandchild">
        <h3>我是C组件</h3>
        <h4>我从A组建接收到的用户名是：{this.context.username}，我的年龄是：{this.context.age}</h4>
      </div>
    )
  }
}