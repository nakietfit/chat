import React, { Component } from 'react'

export default class People extends Component {
  render() {
    return (
      <li class="clearfix">
        <img src={this.props.people.avatar} alt="avatar" />
        <div class="about">
          <div class="name">{this.props.people.name}</div>
          <div class="status">
            <i class="fa fa-circle online"></i> {this.props.people.status}
          </div>
        </div>
      </li>
    )
  }
}
