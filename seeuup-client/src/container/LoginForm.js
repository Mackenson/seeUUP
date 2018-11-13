import React, { Component } from 'react'
import '../css/login-form.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: "",
      password: ""
    }
    this.handleChangeEmails = this.handleChangeEmails.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeEmails(event){
    event.preventDefault()
    this.setState({
      emails: event.target.value
    })
  }

  handleChangePassword(event){
    event.preventDefault()
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let formLoad = {
      emails: this.state.emails,
      password: this.state.password
    }
    this.props.trackUserInput(formLoad)
  }
render(){
  return(
    <div>
      <form className="callout" id="seeuup-login-form" onSubmit={this.handleSubmit}>
        <h1>Login</h1>
      <div id='emails-float'>
            <label htmlFor="emails">Emails:</label>
            <input type="text" id="emails" name="emails" value={this.state.emails} onChange={this.handleChangeEmails} />
          </div>

          <div id='password-float'>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleChangePassword} />
          </div>

          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }
}

export default LoginForm
