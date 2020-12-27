import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom';
//创建组件
class Count extends Component {
  //构造器
  constructor(props) {
    console.log("Count-constructor");
    super(props)
    this.state = { count: 0 }
  }

  addOne = () => {
    //获取状态
    const { count } = this.state
    //更新状态
    this.setState({ count: count + 1 })
  }

  //组件将要挂载的钩子
  componentWillMount() {
    console.log('Count-componentWillMount');
  }
  //组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count-componentDidMount');
  }

  remove = () => {
    unmountComponentAtNode(document.getElementById('root'))
  }

  componentWillUnmount() {
    console.log('Count-componentWillUnmount');
  }

  render() {
    console.log('Count-render');
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <button onClick={this.addOne}>+1</button>
        <br></br>
        <button onClick={this.remove}>卸载</button>
      </div>
    )
  }
}

export default Count
