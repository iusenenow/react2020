import React, { Component } from 'react'
import Search from './Search/index';
import List from './List/index';

export default class Github extends Component {

  state = { users: [], isFirst: true, isLoading: false, error: '' }

  updateState = state => this.setState(state)

  render() {
    return (
      <div id="app">
        <div className="container">
          <Search updateState={this.updateState} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
