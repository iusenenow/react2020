import React, { Component } from 'react'

class Demo extends Component {

  showData = () => {
    //alert(this.refs.input1.value)
    console.log(this.input1.value);
  }

  showData2 = () => {
    //alert(this.refs.input2.value)
    console.log(this.input2.value);
  }

  render() {
    return (
      <div>
        <input ref={currentNode => this.input1 = currentNode} type="text" placeholder="点击按钮提示数据" />
        <button onClick={this.showData}>点我提示左侧数据</button>
        <input ref={currentNode => this.input2 = currentNode} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

export default Demo
