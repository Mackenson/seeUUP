import React, { Component } from 'react';

class Entry extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/home');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to SeeUUp</h1>
          <Link to='Registration'>
            <div className='uup-logo'>
              <p>Click here to SIGN</p>
              <img src='../images/uup-logo.jpg' />
            </div>
          </Link>
        </header>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default Entry;
