import React, { Component } from 'react'
// import qs from 'querystring'

let obj = { name: 'tom', age: 18 }
// console.log(qs.stringify(obj));

let str = 'carName=奔驰&price=199'

const detailData = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' }
]
export default class Home_message_detail extends Component {
  render() {
    console.log(this.props);
    //接受params参数
    const { id, title } = this.props.match.params

    //接受search参数
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    //接受state参数
    // const { id, title } = this.props.location.state

    const findResult = detailData.find(detailObj => detailObj.id === id)
    return (
      <ul>
        <li>ID：{id}</li>
        <li>TITLE：{title}</li>
        <li>CONTENT：{findResult.content}</li>
      </ul>
    )
  }
}
