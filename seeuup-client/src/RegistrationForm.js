import React, { Component } from 'react'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      emails: ""
    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeEmails = this.handleChangeEmails.bind(this)
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

  handleSubmit(event){
    event.preventDefault()
    let formLoad = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emails: this.state.emails
    }
    this.props.trackHandleInput(formLoad)
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
            <input type="text" id="last-name" name="lastName" value={this.state.lastName} onChange={this.handleChangeLasteName} />
          </div>

          <div>
            <label htmlFor="emails">Emails:</label>
            <input type="text" id="emails" name="emails" value={this.state.emails} onChange={this.handleChangeEmails} />
          </div>

          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
