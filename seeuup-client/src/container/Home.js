import React, { Component } from 'react'
import '../css/homepage.css'
import { Link } from 'react-router';

class Home extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div>
        <div id='seeuup-logo1'>
          <img className='seeuup-logo1-img' src='../images/seeuup-logo1.jpg' />
        </div>
        <header>
          <div id='homepage-header'>
            <div>
              <img className='homepage-img' id='homepage-top' src='../images/mark.jpg' />
            </div>
            <div>
              <img className='homepage-img bottom' src='../images/bouquet.jpg' />
              <img id='homepage-globe-img' src='../images/africa-seeuup.jpg' />
            </div>
          </div>
        </header>
        <body>
          <div>
            <Link to='Registration'>
              <div className='uup-logo'>
                <p>Click here to SIGN</p>
                <img src='../images/uup-logo.jpg' />
              </div>
            </Link>
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
