import React from 'react'

const App = () => {
  const data = ["Angular", "VUE", "React"]
  return (
    <div>
      <h1>前端框架列表</h1>
      {data.map((item, idx) => (
        <ul>
          <li key={idx}>{item}</li>
        </ul>
      ))}
    </div>
  )
}

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