import React, { Component } from 'react'
//移入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../actions/count_action';

//定义UI组件
class Count extends Component {
  // componentDidMount() {
  //   //监测redux中的状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(Number(value))
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(Number(value))
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0)
      this.props.increment(Number(value))
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    // 同步action
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(Number(value)))
    // }, 500)

    //异步action
    this.props.incrementAsync(Number(value), 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
/*
  1.mapStateToProps函数返回的是一个对象；
  2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3.mapStateToProps用于传递状态
*/
// const mapStateToProps = state => ({ count: state })
/*
  1.mapDispatchToProps函数返回的是一个对象；
  2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3.mapDispatchToProps用于传递操作状态的方法
*/

// mapDispatchToProps的一般写法
// const mapDispatchToProps = dispatch => ({
//   increment: number => dispatch(createIncrementAction(number)),
//   decrement: number => dispatch(createDecrementAction(number)),
//   incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
// })

//使用connect()()创建并暴露一个Count的容器组件

export default connect(
  //映射状态
  state => ({ count: state }),
  //映射操作状态的方法
  //mapDispatchToProps的简写：
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count)