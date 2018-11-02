import React, {Component} from "react"
import RegistrationForm from './RegistrationForm'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: []
    }
    this.trackUserInput = this.trackUserInput.bind(this)
  }

  trackUserInput(submision) {
    console.log(submision);
    fetch(`/users/register`, {
      method: 'POST',
      body: JSON.stringify(submision),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      let allInput = this.state.input
      this.setState({input: allInput.concat(body)})
    })
  }
  render(){
    console.log(this.state.input);
    return(
      <div>
        <div className="row">
          <div className="medium-6 medium-offset-3 small-12 columns">
            <RegistrationForm
              trackUserInput={this.trackUserInput}
            />
          </div>
        </div>

      </div>
    )
  }
}

export default Registration
