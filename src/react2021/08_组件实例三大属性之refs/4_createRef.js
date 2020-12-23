import React, { Component } from 'react'

class Demo extends Component {
  /*
    1.通过onXxx属性指定事件的处理函数（注意大小写：onClick）
      (1)React使用的是自定义（合成）事件，而不是原生DOM事件 => 为了更好的兼容性
      (2)React中的事件是通过事件委托方式处理的（委托给组件最外层的元素） => 为了更高效
    2.通过e.target的到发生事件的DOM元素对象 => 不要过度使用ref
  */
  // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是”专人专用“的
  myRef = React.createRef()
  myRef2 = React.createRef()

  showData = () => {
    //alert(this.refs.input1.value)
    console.log(this.myRef.current.value);
  }

  showData2 = e => {
    //alert(this.refs.input2.value)
    //console.log(this.myRef2.current.value);
    console.log(e.target.value);
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
