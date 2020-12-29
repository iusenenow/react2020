import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom';
/*
	生命周期的三个阶段（新）
    1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
      1.	constructor()
      2.	getDerivedStateFromProps 
      3.	render()
      4.	componentDidMount()
    2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
      1.	getDerivedStateFromProps
      2.	shouldComponentUpdate()
      3.	render()
      4.	getSnapshotBeforeUpdate
      5.	componentDidUpdate()
    3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
      1.	componentWillUnmount()
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
    console.log('getDerivedStateFromProps', props, state);
    return null
  }
  //在更新之前获取快照
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return '123'
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
  componentDidUpdate(preProps, preState, snapshotValue) {
    console.log('Count-componentDidUpdate', preProps, preState, snapshotValue);
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
