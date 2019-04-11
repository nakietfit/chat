import React, { Component } from 'react'
import Message from '../Message'

export default class ChatHistory extends Component {
  render() {
    return (
      <div class="chat-history">
        <ul>
          <Message />
        </ul>
      </div>
    )
  }
}
