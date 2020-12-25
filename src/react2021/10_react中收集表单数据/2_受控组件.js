import React, { Component } from 'react'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault() //阻止表单提交
    console.log(`用戶名：${this.state.username}，密碼：${this.state.password}`);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form action="http://weizhang.in" onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.handleChange} type="text" name="username" />
        密码：<input onChange={this.handleChange} type="password" name="password" />
        <button>登陆</button>
      </form>
    )
  }
}

export default Login