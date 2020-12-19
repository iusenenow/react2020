import React, { Component } from 'react'

//1.创建Class Component
export default class MyClassComponent extends Component {
  render() {
    //render方法放在了MyClassComponent的prototype上，供实例使用
    //render中的this是谁？=> MyCompoenent组件实例对象
    console.log('render中的this', this);
    return (
      <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
    )
  }
}

//2.渲染组件到页面
/*
执行了ReactDOM.render(<MyClassComponent/>)之后发生了什么？
1.React解析组件标签，找到了MyComponent组件。
2.发现组件是使用类定义的，随后new出该类的实例，并通过该实例调用到原型上的render方法。
3.将render返回的虚拟DOM转为真是DOM，随后呈现在页面中。
*/