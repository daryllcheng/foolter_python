import React, { Component } from 'react';
import Search from './containers/Search';
import Foods from './containers/Foods';
import ReactGA from 'react-ga';

class App extends Component {
  constructor() {
    super();

    ReactGA.initialize('UA-111633247-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="app">
        <Search />
        <Foods /> 
      </div>
    );
  }
}

export default App;