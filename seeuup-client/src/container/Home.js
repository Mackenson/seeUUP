import React, { Component } from 'react'
import '../css/homepage.css'
class Home extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div>
        <header>
          <div id='homepage-header'>
            <div>
              <img className='homepage-img' id='homepage-top' src='../images/mark.jpg' />
            </div>

            <div>
              <img className='homepage-img' src='../images/bouquet.jpg' />
            <img id='homepage-globe-img' src='../images/globe-logo.jpg' />
            </div>
            
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
