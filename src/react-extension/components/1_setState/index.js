import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 0 }

  addOne = () => {
    //对象式的setState
    // const { count } = this.state
    // this.setState({ count: count + 1 }, () => console.log(this.state.count))

    //函数式的setState
    this.setState(preState => {
      console.log(preState);
      return { count: preState.count + 1 }
    })
  }

  render() {
    return (
      <div>
        <h4>当前求和为：{this.state.count}</h4>
        <button onClick={this.addOne}>点我加1</button>
      </div>
    )
  }
}
