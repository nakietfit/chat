import React, { Component } from 'react'

export default class LogIn extends Component {
  constructor(props) {
    super(props)

    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.email.current.value, this.password.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={this.email} placeholder="Email" />
        <input type="password" ref={this.password} placeholder="Password" />
        <button>Log in</button>
      </form>
    )
  }
}
