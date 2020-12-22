import React, { Component } from 'react'

class Demo extends Component {

  state = { isHot: true }

  showData = () => {
    //alert(this.refs.input1.value)
    console.log(this.input1.value);
  }

  changeWeather = () => {
    const { isHot } = this.state
    this.setState({ isHot: !isHot })
  }

  saveInput = currentNode => {
    this.input1 = currentNode
    console.log(currentNode);
  }

  render() {
    return (
      <div>
        <h2>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>
        <button onClick={this.changeWeather}>点我切换天气</button>
        {/* <input ref={currentNode => this.input1 = currentNode} type="text" placeholder="点击按钮提示数据" /> */}
        <input ref={this.saveInput} type="text" />
        <button onClick={this.showData}>点我提示左侧数据</button>
      </div>
    )
  }
}

export default Demo
