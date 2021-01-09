import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props
    return (
      <div>
        <div className="row">
          {isFirst && <h2>欢迎使用，输入关键字，随后点击搜索</h2>}
          {isLoading && <h2>正在载入...</h2>}
          {error && <h2 style={{ color: "coral" }}>{error}</h2>}
          {!isLoading &&
            this.props.users.map(user =>
            (<div key={user.id} className="card">
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img alt="head-pic" src={user.avatar_url} style={{ width: '100px' }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>))}
        </div>
      </div>
    )
  }
}
