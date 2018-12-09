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
    this.props.loginTrackUserInput(formLoad)
  }
render(){
  return(
    <div>
      <form className="callout" id="seeuup-login-form" onSubmit={this.handleSubmit}>
        <div className="login-seeuup">
          <h1>SeeUUP <img className="login-logo" src='../images/uup-logo.jpg' /></h1>
        </div>
        <div id="login-sec-div">
          <div id='emails-float'>
              <input type="text" id="emails" placeholder="emails" name="emails" value={this.state.emails} onChange={this.handleChangeEmails} />
          </div>

              <div id='password-float'>
                <input type="text" id="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword} />
              </div>

              <input type="submit" className="button" value="Login "/>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
