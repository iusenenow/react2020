import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {this.props.users.map(user => (
            <div key={user.id} className="card">
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img alt="head-pic" src={user.avatar_url} style={{ width: '100px' }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
