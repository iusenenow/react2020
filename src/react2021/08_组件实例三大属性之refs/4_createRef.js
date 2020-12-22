import React, { Component } from 'react'

class Demo extends Component {
  // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是”专人专用“的
  myRef = React.createRef()
  myRef2 = React.createRef()

  showData = () => {
    //alert(this.refs.input1.value)
    console.log(this.myRef.current.value);
  }

  showData2 = () => {
    //alert(this.refs.input2.value)
    console.log(this.myRef2.current.value);
  }

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
        <button onClick={this.showData}>点我提示左侧数据</button>
        <input ref={this.myRef2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

export default Demo
