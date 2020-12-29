import React, { Component } from 'react'

export default class NewsList extends Component {
  state = { newsArray: [] }

  componentDidMount() {
    setInterval(() => {
      //获取原状态
      const { newsArray } = this.state
      //模拟一条新闻
      const news = '新闻' + (newsArray.length + 1)
      //更新状态
      this.setState({ newsArray: [news, ...newsArray] })
    }, 1000);
  }

  getSnapshotBeforeUpdate() {
    return this.refs.list.scrollHeight
  }

  componentDidUpdate(preProps, preState, preScrollHeight) {
    this.refs.list.scrollTop += this.refs.list.scrollHeight - preScrollHeight
  }

  render() {
    return (
      <div className="list" ref="list" style={{ width: "200px", height: "150px", backgroundColor: "skyblue", overflow: "auto", marginTop: "30px" }}>
        {this.state.newsArray.map((news, index) => <div key={index} className="news" style={{ height: '30px' }}>{news}</div>)}
      </div>
    )
  }
}
