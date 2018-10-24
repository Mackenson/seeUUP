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
  // componentWillMount(){
  //   fetch('/home',{
  //   method: 'POST',
  //   body: JSON.stringify({ input: this.state.input}),
  //   headers: {"Content-Type": "application/json"}
  // })
  // .then(function(response){
  //   return response.json();
  // }).then(function(body){
  //   console.log(body);
  // });
  // }



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
              trackUserInput={this.trackUserInput}
            />
          </div>
        </div>

      </div>
    )
  }
}

export default Registration
