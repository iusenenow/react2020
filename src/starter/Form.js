import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      sex: '',
    }
  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    if (name === "age") {
      if (value !== '' && isNaN(value)) {
        alert("Your age must be a number.")
      }
    }

    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addContact(this.state)
  }

  render() {
    const buttonStyle = {
      padding: "6px 10px",
      borderRadius: "5px",
      backgroundColor: "DodgerBlue",
      color: "#fff"
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" onChange={this.handleChange} />
          <label htmlFor="sex">Sex:</label>
          <input type="text" name="sex" onChange={this.handleChange} />
          <button style={buttonStyle}>提交表单</button>
        </form>
      </div>
    )
  }
}

export default Form
