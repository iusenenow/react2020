import React, { Component } from 'react'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault() //阻止表单提交
    console.log(`用戶名：${this.username.value}，密碼：${this.password.value}`);
  }
  render() {
    return (
      <form action="http://weizhang.in" onSubmit={this.handleSubmit}>
        用户名：<input ref={c => this.username = c} type="text" name="username" />
        密码：<input ref={c => this.password = c} type="password" name="password" />
        <button>登陆</button>
      </form>
    )
  }
}

export default Login