import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom'

export class LifeCycle extends Component {
  /*
    1.组件从
  */
  state = { opacity: 1 }

  removeComponents = () => {
    //卸载组件
    unmountComponentAtNode(document.getElementById('root'))
  }

  //组件挂载完毕调用
  componentDidMount() {
    this.timer = setInterval(() => {
      //获取原状态
      let { opacity } = this.state
      //减少0.1
      opacity -= 0.1
      if (opacity <= 0) opacity = 1
      //设置新的透明度
      this.setState({ opacity })
    }, 200)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  //render调用的时机：初始化渲染、状态更新之后
  render() {
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办？</h2>
        <button onClick={this.removeComponents}>不活了</button>
      </div>
    )
  }
}

export default LifeCycle
