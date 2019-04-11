import React, { Component } from 'react'

export default class People extends Component {
  render() {
    let statusClass = ''
    if (this.props.people.status == 'online') {
      statusClass = 'fa fa-circle online'
    }
    if (this.props.people.status != 'online') {
      statusClass = 'fa fa-circle offline'
    }

    return (
      <li class="clearfix">
        <img src={this.props.people.avatar} alt="avatar" />
        <div class="about">
          <div class="name">{this.props.people.name}</div>
          <div class="status">
            <i class={statusClass}></i> {this.props.people.status}
          </div>
        </div>
      </li>
    )
  }
}
