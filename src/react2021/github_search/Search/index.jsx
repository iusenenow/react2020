import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {

  handleSearch = () => {
    //1.获取用户输入
    const { keyWordElement: { value: keyWord } } = this //连续解构赋值并重命名
    //发送请求前通知App更新状态
    this.props.updateState({ isFirst: false, isLoading: true })
    //2.发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`)
      //请求成功后更新状态
      .then(response => this.props.updateState({ isLoading: false, users: response.data.items }))
      //请求失败后更新状态
      .then(error => this.props.updateState({ isLoading: false, error: error.messege }))
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input ref={element => this.keyWordElement = element} type="text" placeholder="输入关键字点击搜索" />&nbsp;&nbsp;<button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    )
  }
}
