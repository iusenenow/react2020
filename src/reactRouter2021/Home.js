import React, { Component } from 'react'
import Home_news from './Home_news'
import Home_message from './Home_message';
import MyNavLink from './MyNavLink';
import { Redirect, Route, Switch } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={Home_news} />
            <Route path="/home/message" component={Home_message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
