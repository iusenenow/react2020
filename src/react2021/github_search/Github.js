import React, { Component } from 'react'
import Search from './Search/index';
import List from './List/index';

export default class Github extends Component {
  render() {
    return (
      <div id="app">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    )
  }
}
