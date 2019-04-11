import React, { Component, Fragment } from 'react'

export default class Message extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.message.user ? (
            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time">{this.props.message.time}</span> &nbsp; &nbsp;
                <span class="message-data-name">{this.props.message.name}</span> <i class="fa fa-circle me"></i>
              </div>
              <div class="message other-message float-right">{this.props.message.message}</div>
            </li>
          ) : (
            <li>
              <div class="message-data">
                <span class="message-data-name"><i class="fa fa-circle online"></i> {this.props.message.name}</span>
                <span class="message-data-time">{this.props.message.time}</span>
              </div>
              <div class="message my-message">{this.props.message.message}</div>
            </li>
          )
        }
      </Fragment>
    )
  }
}
