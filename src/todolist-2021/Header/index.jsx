import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {

  handleKeyUp = e => {
    //解构赋值获取KeyCode，target
    const { keyCode, target } = e
    //判断是否为回车按键
    if (keyCode !== 13) return
    //添加的tudo名字不能为空
    if (!target.value.trim()) {
      alert('输入不能为空！')
      return
    }
    //准备好一个todo对象
    const todo = { id: nanoid(), name: target.value.trim(), isDone: false }
    //通过addTodo回调函数将todo传递给App
    this.props.addTodo(todo)
    //清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
