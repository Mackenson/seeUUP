import React, { Component } from 'react'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      emails: "",
      password: "",
      confirmPassword: ""
    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeEmails = this.handleChangeEmails.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
  }

  handleChangeFirstName(event){
    event.preventDefault()
    this.setState({
      firstName: event.target.value
    })
  }

  handleChangeLastName(event){
    event.preventDefault()
    this.setState({
      lastName: event.target.value
    })
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

  handleChangeConfirmPassword(event){
    event.preventDefault();
    this.setState({
      confirmPassword: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let formLoad = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emails: this.state.emails,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    this.props.trackUserInput(formLoad)
  }
render(){
  return(
    <div>
      <form className="callout" id="seeuup-form" onSubmit={this.handleSubmit}>
        <h1>Registration Form</h1>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="first-name" name="firstName" value={this.state.firstName} onChange={this.handleChangeFirstName} />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="last-name" name="lastName" value={this.state.lastName} onChange={this.handleChangeLastName} />
          </div>

          <div>
            <label htmlFor="emails">Emails:</label>
            <input type="text" id="emails" name="emails" value={this.state.emails} onChange={this.handleChangeEmails} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleChangePassword} />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="text" id="confirm-password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangeConfirmPassword} />
          </div>

          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
