import React from 'react'
import Rainbow from '../hoc/Rainbow';


const Home = () => {
  return (
    <div className="container">
      <h3 className="center">Home页面</h3>
      <p>欢迎来到我的世界！</p>
    </div>
  )
}

export default Rainbow(Home)
