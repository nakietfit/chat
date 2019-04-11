import React, { Component } from 'react'
import Message from '../Message'

export default class ChatHistory extends Component {
  message_list = [
    {
      user: true,
      time: "10:10 AM, Today",
      name: "Olia",
      content: "Hi Vincent, how are you? How is the project coming along?"
    },
    {
      user: false,
      time: "10:12 AM, Today",
      name: "Vincent",
      content: "Are we meeting today? Project has been already finished and I have results to show you."
    },
    {
      user: true,
      time: "10:14 AM, Today",
      name: "Olia",
      content: "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?"
    }
  ]

  render() {
    return (
      <div class="chat-history">
        <ul>
          {
            this.message_list.map((e, i) => <Message key={i} message={e} />)
          }
        </ul>
      </div>
    )
  }
}
