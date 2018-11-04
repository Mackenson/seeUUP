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
        <body>
          <div id='seeuup-logo1'>
            <img className='seeuup-logo1-img' src='../images/seeuup-logo1.jpg' />
          </div>
          <header>
            <div id='homepage-header'>
              <div>
                <img className='homepage-img' id='homepage-top' src='../images/example1.jpg' />
              </div>
              <div>
                <img className='homepage-img bottom' src='../images/example2.jpg' />
                <span className='header-p'><p>"Display your Talents snd Skills Across the Glode, and Change the way to see Africa"</p></span>
                <img id='homepage-globe-img' src='../images/africa-seeuup.jpg' />
              </div>
            </div>
          </header>
          <div>
            <div className='body-p'>
              <p>
                Perfect for Anyone! <br /> You Should Embark on an Exciting Journey by
                Introducing Your Intelligent Capacities, <br />  Social  and  Cultural
                Diversity,  and  the  Ability  to  Create  Profitable  Opportunities
                for <br /> Yourself  and  Others.  SeeUUP  offers  Landing  pages,  News
                Feed,  Image/Video  Feed, <br /> Chat Box, Timeline and lot more.
              </p>
            </div>
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
