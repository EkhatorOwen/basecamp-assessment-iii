import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"></hr>
  <p>Testing the bootstrap jumbotron on React.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="" role="button">React!</a>
  </p>
  </div>

    );
  }
}

export default App;
