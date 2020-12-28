import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom';
/*
	
*/
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

  remove = () => {
    unmountComponentAtNode(document.getElementById('root'))
  }

  force = () => {
    this.forceUpdate()
  }

  //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log('Count-getDerivedStateFromProps', props, state);
    return props
  }

  //组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count-componentDidMount');
  }
  //组件将要卸载的钩子
  componentWillUnmount() {
    console.log('Count-componentWillUnmount');
  }
  //控制组件更新的“阀门”钩子
  shouldComponentUpdate() {
    //不写钩子默认为true
    console.log('Count-shouldComponentUpdate');
    return true
  }
  //组件更新完毕的钩子
  componentDidUpdate() {
    console.log('Count-componentDidUpdate');
  }

  render() {
    console.log('Count-render');
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <button onClick={this.addOne}>+1</button>
        <br />
        <button onClick={this.remove}>卸载</button>
        <br />
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }
}



export default Count
