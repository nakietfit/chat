import React, { Component } from 'react'

export default class ChatMessage extends Component {
  constructor(props) {
    super(props);

    this.messageToSend = React.createRef();
  }

  render() {
    return (
      <div className="chat-message clearfix">
        <textarea name="message-to-send" ref={this.messageToSend} placeholder ="Type your message" rows="3"></textarea>
                
        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
        
        <button>Send</button>
      </div>
    )
  }
}
