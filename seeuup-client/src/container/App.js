import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './Home';
import Registration from './Registration';

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
  }
}
render() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/registration' component={Registration} />
    </Router>
  );
  }
}

export default App;
