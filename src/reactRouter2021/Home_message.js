import React, { Component } from 'react'
import Home_message_detail from './Home_message_detail';
import { Link, Route } from 'react-router-dom';

export default class Home_message extends Component {
  state = {
    messages: [
      { id: '01', title: "消息1" },
      { id: '02', title: "消息2" },
      { id: '03', title: "消息3" },
    ]
  }

  showReplace = (id, title) => {
    //replace跳转+携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //replace跳转+携带query参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //replace跳转+携带state参数
    // this.props.history.replace(`/home/message/detail`,{id,title})
  }

  showPush = (id, title) => {
    //push跳转+携带params参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)

    //replace跳转+携带query参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //push跳转+携带state参数
    // this.props.history.push(`/home/message/detail`,{id,title})
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(-2)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message => (
            <li key={message.id}>

              {/* 向路由组件传递params参数 */}
              <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;
              <button onClick={() => this.showPush(message.id, message.title)}>Push查看</button>&nbsp;
              <button onClick={() => this.showReplace(message.id, message.title)}>Replace查看</button>

              {/* 向路由组件传递search参数 */}
              {/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

              {/* 向路由传递state参数 */}
              {/* <Link to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title } }}>{message.title}</Link> */}
            </li>
          ))}
        </ul>
        <hr />

        {/* 声明接受params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Home_message_detail} />

        {/* search参数无需声明接受，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Home_message_detail} /> */}

        {/* state参数无需声明接受，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Home_message_detail} /> */}

        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>回退2步</button>
      </div>
    )
  }
}
