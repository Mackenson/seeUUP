import React from 'react';
import RegistrationForm from '../container/RegistrationForm'
const BackgroundImages = (props) => {
  console.log(props.image);
  return (
      <div>
        <p>hello</p>
      <div className="ro container">
       <div className="medium-6 medium-offset-3 small-12 columns registration-form">
       <RegistrationForm
       registrationTrackUserInput={this.registrationTrackUserInput}
       />
       </div>
       <div id='form-oerlay'></div>
       </div>
       </div>

  );

}

export default BackgroundImages;
