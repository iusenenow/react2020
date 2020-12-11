import { useState } from 'react'
import Contact from './Contact';
import Form from './Form';
import './App.css';


function App() {
  const initialState = [
    { id: 1, name: "Summer", age: 30, sex: "female" },
    { id: 2, name: "Jimmy", age: 22, sex: "male" },
    { id: 3, name: "Lucy", age: 89, sex: "female" }
  ]
  const [state, setstate] = useState(initialState)

  const addContact = contact => {
    contact.id = state.length + 1
    setstate([...state, contact])
  }

  const deleteContact = id => {
    const filteredState = state.filter(person => person.id !== id)
    setstate([...filteredState])
  }

  return (
    <div>
      <Contact contactForm={state} deleteContact={deleteContact}/>
      <Form addContact={addContact} />
    </div>
  );
}

// class OMG extends Component {
//   // constructor(props) {
//   //   super(props)
//   //   // this.handleClick = this.handleClick.bind(this)
//   //   // this.handleMouseOver = this.handleMouseOver.bind(this)
//   //   // this.handleCopy = this.handleCopy.bind(this)
//   // }

//   state = {
//     name: 'Summer',
//     age: 30
//   }

//   // handleClick() {
//   //   this.setState({ name: "Lucy", age: 22 })
//   //   console.log(this.state);
//   // }

//   // handleMouseOver(e) {
//   //   console.log(e.target, e.pageX, e.pageY);
//   // }

//   // // handleCopy() {
//   // //   alert("作者为Teresa Zhang，复制请注明出处");
//   // }

//   handleSubmit = e => {
//     e.preventDefault()
//     console.log(e.target.name.value);
//   }

//   handleChange = e => {
//     this.setState({ name: e.target.value })
//   }

//   render() {
//     return (
//       <>
//         {/* <h2>{Math.floor(Math.random() * 10) + 1}</h2> */}
//         <h3>我的名字叫：{this.state.name}，我今年{this.state.age}岁。</h3>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="name" id="name" onChange={this.handleChange} />
//           <button>提交</button>
//         </form>

//         {/* <button onClick={this.handleClick}>点击</button>
//         <button onMouseOver={this.handleMouseOver}>鼠标悬停</button>
//         <p onCopy={this.handleCopy}>学习编程，改变生活</p> */}
//       </>
//     )
//   }
// }


export default App;