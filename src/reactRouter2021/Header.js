import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  back = () => this.props.history.goBack()

  forward = () => this.props.history.goForward()

  go = () => this.props.history.go(-2)

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="page-header"><h2>React Router Demo</h2></div>
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>回退2步</button>
      </div>
    )
  }
}

//withRouter可以加工一般组间，让一般组件具备路由组建所特有的API，withRouter的返回值是一个新组件
export default withRouter(Header)
