import React from 'react'
import MyClassComponent from './05_react中的定义组件/2_类式组件';

const App = () => {
  const data = ["Angular", "VUE", "React"]
  return (
    <div>
      <h1>前端框架列表</h1>
      {data.map((item, idx) => (
        <ul key={idx}>
          <li>{item}</li>
        </ul>
      ))}
      {/* <MyComponent /> */}
      <MyClassComponent />
    </div>
  )
}

// function MyComponent() {
//   console.log(this) //此处的this是undefined，因为babel编译后开启了严格模式
//   return <h2>我使用函数定义的组件（适用于【简单组件】的定义）</h2>
// }
/*
  执行了ReactDOM.render(<MyComponent/>...)之后发生了什么？
  1.React解析组件标签，找到了MyComponent组件。
  2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/

export default App

/*
一定注意区分：【js语句代码】与【js表达式】
1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方。
下面这些都是表达式：
(1) a
(2) a+b
(3) demo(1)
(4) arr.map()
(5) function test() {}
2.语句（代码）
下面这些都是语句（代码）：
(1) if(){}
(2) for(){}
(3) switch(){case:xxxx}
*/