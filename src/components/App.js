import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="MyApp" alt="logo" />
          <h2>Shall We Blog</h2>
        </div>
        <p className="AppIntro">



        </p>
      </div>
    );
  }
}

export default App;
