import React, {Component} from "react"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import Home from './Home';
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
  componentDidMount() {
  fetch('/images/boss')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
        console.log("this is response",response);
      })
      .then(response => response.json())
      .then(body => {
        console.log("this is bdoy",body);
        this.setState({images: this.state.images.concat(body)})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}` ));
    }


  render(){
    // console.log(this.state.images[0].Images);
    let allImages = this.state.images
    allImages.map((image)=>{
      image.Images.map((img)=>{
        
      })
    })

    return(
      <div >
        <div className="ro cntainer">
          <div className="medium-6 medium-offset-3 small-12 columns registration-form">
            <RegistrationForm
              registrationTrackUserInput={this.registrationTrackUserInput}
            />
          </div>
          <div id='form-oerlay'></div>
        </div>
      </div>
    )
  }
}

export default Registration
