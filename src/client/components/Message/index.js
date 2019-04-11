import React, { Component, Fragment } from 'react'

export default class Message extends Component {
  render() {
    const { message } = this.props

    return (
      <Fragment>
        {
          message.user ? (
            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span class="message-data-name">{message.name}</span> <i class="fa fa-circle me"></i>
              </div>
              <div class="message my-message float-right">{message.message}</div>
            </li>
          ) : (
            <li>
              <div class="message-data">
                <span class="message-data-name"><i class="fa fa-circle online"></i> {message.name}</span>
                <span class="message-data-time">{message.time}</span>
              </div>
              <div class="message other-message">{message.message}</div>
            </li>
          )
        }
      </Fragment>
    )
  }
}
