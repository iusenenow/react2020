import { Component } from 'react'
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <OMG />
      <ABC />
    </div>
  );
}

class OMG extends Component {
  state = {
    name: 'Summer',
    age: 30
  }
  render() {
    return (
      <>
        <h1>OMG OMG!!</h1>
        <h2>{Math.floor(Math.random() * 10) + 1}</h2>
        <h3>我的名字叫：{this.state.name}，我今年{this.state.age}岁。</h3>
      </>
    )
  }
}

class ABC extends Component {
  render() {
    return <h2>ABC ABC!</h2>
  }
}

export default App;