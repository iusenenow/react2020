import React, { Component } from 'react'
import store from './store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './count_action';

export default class Count extends Component {
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
    this.props.incrementAsync(Number(value),500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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