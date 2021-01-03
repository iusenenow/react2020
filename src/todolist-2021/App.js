import React, { Component } from 'react'
import "./App.css"
import Header from './Header/index';
import List from './List/index';
import Footer from './Footer/index';

export class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
