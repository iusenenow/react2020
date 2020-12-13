import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}
