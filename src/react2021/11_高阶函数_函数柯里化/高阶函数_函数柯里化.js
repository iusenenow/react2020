import React, { Component } from 'react'

//#region 
/*
  高阶函数：如果一个函数符合下面两个规范中的任何一个，那该函数就是高阶函数。
  1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
  2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
  常见的高阶函数有：Promise, setTimeout, array.map().etc.

  函数的柯里化(currying)：通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式
  function sum(a) {
    return (b) => {
      return (c) => {
        return a + b + c
      }
    }
  }
*/
//#endregion
class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault() //阻止表单提交
    console.log(`用戶名：${this.state.username}，密碼：${this.state.password}`);
  }

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  saveFormData = dataType => {
    return e => {
      this.setState({ [dataType]: e.target.value })
    }
  }

  //不用currying的写法
  // saveFormData = (dataType, e) => {
  //   this.setState({ [dataType]: e.target.value })
  // }

  render() {
    return (
      <form action="http://weizhang.in" onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.saveFormData('username')} type="text" name="username" />
        {/* 不用currying写法：onChange={e => this.saveFormData('username', e)} */}
        密码：<input onChange={this.saveFormData('password')} type="password" name="password" />
        <button>登陆</button>
      </form>
    )
  }
}

export default Login