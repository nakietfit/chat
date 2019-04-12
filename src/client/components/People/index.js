import React, { Component } from 'react'

export default class People extends Component {
  render() {
    const { people } = this.props

    let statusClass = ''
    if (people.status == 'online') {
      statusClass = 'fa fa-circle online'
    }
    if (people.status != 'online') {
      statusClass = 'fa fa-circle offline'
    }

    return (
      <li className="clearfix">
        <img src={people.avatar} alt="avatar" />
        <div className="about">
          <div className="name">{people.name}</div>
          <div className="status">
            <i className={statusClass}></i> {people.status}
          </div>
        </div>
      </li>
    )
  }
}
