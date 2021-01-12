import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Header from './Header';
import MyNavLink from './MyNavLink';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                  {/* 原生html中，靠<a>跳转不同的页面 */}
                  {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
                  {/* 在React中靠路由连接实现切换组件 */}
                  <MyNavLink to="/about">About</MyNavLink>
                  <MyNavLink to="/home" >Home</MyNavLink>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/home" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    )
  }
}
