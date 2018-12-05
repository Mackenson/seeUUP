import React, { Component } from 'react'
import '../css/homepage.css'
import { Link } from 'react-router';
import { setTranslations, setDefaultLanguage, translate } from 'react-multi-lang'


// setTranslations({pt})
setDefaultLanguage('en')

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('regitrationImages/image');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div>
        <body>

          <div id='seeuup-logo1'>
            <img className='seeuup-logo1-img' src='../images/see2.jpg' /><img className='seeuup-logo1-img' src='../images/uup-logo.jpg' />
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

            <div id='small-container-box'>
              <div className='small-box'>
                <img className='small-box-img'  src='../images/seeuupblack4.jpeg' />
                <div className='body-p'>
                  <p>
                    You will be allowed to Adopt the Power by Displaying your Talents and Skills Set,
                    Across the Globe! SEEUUP includes Daily Dialogs – Entrepreneurship &
                    Business Endeavor – Educational Goals – Music & Sports – Meetings – News Sharing – Photo &
                    Video Sharing, and much more!
                  </p>
                </div>
              </div>
              <div className='small-box'>
                <img className='small-box-img'  src='../images/seeuupblack3.jpg' />
                <div className='body-p'>
                  <p>
                    Perfect for Anyone! You Should Embark on an Exciting Journey by
                    Introducing Your Intelligent Capacities, Social  and  Cultural
                    Diversity,  and  the  Ability  to  Create  Profitable  Opportunities
                    for Yourself  and  Others.  SeeUUP  offers  Landing  pages,  News
                    Feed,  Image/Video Feed, Chat Box, Timeline and lot more.
                  </p>
                </div>
              </div>
              <div className='small-box'>
                <img className='small-box-img'  src='../images/seeuupblack1.jpg' />
                <div className='body-p'>
                  <p>
                    The SEEUUP application gives something to the people of Africa,
                    which has never been given by other social networking sites.
                    The mission of SEEUUP, will exceed the expectations of the users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
