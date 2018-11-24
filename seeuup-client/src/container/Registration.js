import React, {Component} from "react"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import Home from './Home';
import BackgroundImages from '../component/BackgroundImages';
import '../css/registration-form.css'

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registrationInput: false,
      loginInput: [],
      images: []
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
      this.setState({registrationInput: body})

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

    return(
      <div >
        <LoginForm
          loginTrackUserInput={this.state.loginTrackUserInput}
        />
        <img className="background-img"  src="../images/example1.jpg"/>
        <img className="background-img"  src="../images/seeuupblack1.jpg"/>
        <img className="background-img"  src="../images/seeuupblack2.jpeg"/>
        <img className="background-img"  src="../images/seeuupblack3.jpg"/>
        <img className="background-img"  src="../images/example2.jpg"/>
        <img className="background-img"  src="../images/seeuupblack4.jpeg"/>
        <div className="main-form" >
        <RegistrationForm
          registrationTrackUserInput={this.registrationTrackUserInput}
        />
        </div>
      </div>
  )
  }
}

export default Registration
