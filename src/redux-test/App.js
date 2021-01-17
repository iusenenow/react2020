import React, { Component } from 'react'
import Count from './redux/containers/Count';
import Person from './redux/containers/Person';

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr/>
        <Person />
      </div>
    )
  }
}
