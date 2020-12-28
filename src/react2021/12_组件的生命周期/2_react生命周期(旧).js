import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom';
/*
生命周期的三个阶段（旧）
	1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
    1.	constructor()
    2.	componentWillMount()
    3.	render()
    4.	componentDidMount() => 常用，一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
	2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
    1.	shouldComponentUpdate()
    2.	componentWillUpdate()
    3.	render() => 必须要用
    4.	componentDidUpdate()
	3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
    1.	componentWillUnmount() => 常用，一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
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
  //组件将要挂载的钩子
  componentWillMount() {
    console.log('Count-componentWillMount');
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
  //组件将要更新的钩子
  componentWillUpdate() {
    console.log('Count-componentWillUpdate');
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
        <A />
      </div>
    )
  }
}
//父组件A
class A extends Component {
  //初始化状态
  state = { carName: '奔驰' }

  changeCar = () => {
    this.setState({ carName: '奥拓' })
  }
  render() {
    return (
      <div>
        <h4>我是A组件</h4>
        <button onClick={this.changeCar}>点我换车</button>
        <B carName={this.state.carName} />
      </div>
    )
  }
}
//子组件B
class B extends Component {
  componentWillReceiveProps() {
    console.log('B-componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('B-shouldComponentUpdate');
    return true
  }
  componentWillUpdate() {
    console.log('B-componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('B-componentDidUpdate');
  }
  render() {
    console.log('B-render');
    return (
      <div>
        <h4>我是B组件，接受到的车是：{this.props.carName}</h4>
      </div>
    )
  }
}



export default Count
