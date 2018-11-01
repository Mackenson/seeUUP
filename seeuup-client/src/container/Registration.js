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
componentWillMount(){
  let callApi = async () => {
    const location = window.location.seeUUP;
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const data = await fetch(`mongodb://localhost/${location}`, settings)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(e => {
            return e
        });

    return data;


  }
}



  trackUserInput(submision){
    let allInput = this.state.input
    this.setState({input: allInput.concat(submision)})
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
