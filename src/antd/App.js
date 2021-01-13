import React, { Component } from 'react'
import { Button } from 'antd'
import { WechatOutlined, FacebookOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button type="link">Primary Button</Button>
        <Button type="ghost">Primary Button</Button>
        <Button type="dashed">Primary Button</Button>
        <WechatOutlined />
        <FacebookOutlined />
      </div>
    )
  }
}
