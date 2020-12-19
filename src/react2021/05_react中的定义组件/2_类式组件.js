import React, { Component } from 'react'

//1.创建Class Component
export default class MyClassComponent extends Component {
  //构造器执行了几次？--1次
  constructor(props) {
    super(props)
    //初始化状态
    this.state = { isHot: true }
    //解决changeWeather中指向问题
    this.changeWeather = this.changeWeather.bind(this)
  }
  //changeWeather调用了几次？--点几次调几次
  changeWeather() {
    //changeWeather方法放在了Weather的prototype上，供实例使用
    //由于changeWeather作为onclick的回调，所以不是通过实例调用的，是直接调用
    //类中的方法默认开启了局部严格模式，所以changeWeather中的this为undefined
    //console.log(this); // undefiend

    //状态不可直接更改，须借助一个内置API：setState更改，且更新是一种合并
    this.setState({ isHot: !this.state.isHot })
  }

  //render执行了几次？--1+n次 1是初始化的那次 n是状态更新的次数
  render() {
    //render方法放在了MyClassComponent的prototype上，供实例使用
    //render中的this是谁？=> MyCompoenent组件实例对象
    console.log('render中的this', this);
    //读取状态
    return <h1 onClick={this.changeWeather}>今天天气很{this.state.isHot ? '炎热。' : '凉爽。'}</h1>
  }
}

//2.渲染组件到页面
/*
执行了ReactDOM.render(<MyClassComponent/>)之后发生了什么？
1.React解析组件标签，找到了MyComponent组件。
2.发现组件是使用类定义的，随后new出该类的实例，并通过该实例调用到原型上的render方法。
3.将render返回的虚拟DOM转为真是DOM，随后呈现在页面中。
*/