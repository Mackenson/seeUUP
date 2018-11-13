import React, {Component} from "react"
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import '../css/registration-form.css'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registrationInput: [],
      loginInput: []
    }
    this.registrationTrackUserInput = this.registrationTrackUserInput.bind(this)
    this.loginTrackUserInput = this.loginTrackUserInput.bind(this)
  }

  registrationTrackUserInput(submision) {
    console.log('this is submision',submision);
    fetch(`/users/register`, {
      method: 'POST',
      body: JSON.stringify(submision),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      let allInput = this.state.registrationInput
      this.setState({registrationInput: allInput.concat(body)})
    })
  }

  loginTrackUserInput(submision) {
    console.log(submision);
    fetch(`/users/login`, {
      method: 'POST',
      body: JSON.stringify(submision),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      let allInput = this.state.loginInput
      this.setState({loginInput: allInput.concat(body)})
    })
  }
  render(){
    console.log('this is input',this.state.registrationInput);
    return(
      <div >
        <div className="ro container">
          <video  autoPlay loop className="video-fullscreen" type="video/mp4"  src="../video/seeuup.mp4" autoPlay="autoplay" loop muted>
          </video>
          <div className="medium-6 medium-offset-3 small-12 columns registration-form">
            <RegistrationForm
              registrationTrackUserInput={this.registrationTrackUserInput}
            />
          </div>
          <div id='form-overlay'></div>
        </div>
      </div>
    )
  }
}

export default Registration
