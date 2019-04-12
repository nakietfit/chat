import React, { Component, Fragment } from 'react'

export default class Message extends Component {
  render() {
    const { message } = this.props

    return (
      <Fragment>
        {
          message.user ? (
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{message.name}</span> <i className="fa fa-circle me"></i>
              </div>
              <div className="message my-message float-right">{message.content}</div>
            </li>
          ) : (
            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {message.name}</span>
                <span className="message-data-time">{message.time}</span>
              </div>
              <div className="message other-message">{message.content}</div>
            </li>
          )
        }
      </Fragment>
    )
  }
}
