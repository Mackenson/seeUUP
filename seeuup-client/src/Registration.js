import React, {Component} from "react"
import RegistrationForm from './RegistrationForm'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: []
    }
  }
  trackUserInput(submision){
    let allInput = this.state.input
    this.setState({input: allInput.concat(submision)})
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="medium-6 medium-offset-3 small-12 columns">
            <RegistrationForm
              trackHandleInput={this.trackHandleInput}
            />
          </div>
        </div>

      </div>
    )
  }
}

export default Registration
