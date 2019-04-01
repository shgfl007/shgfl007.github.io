import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './main.scss';
import { HashRouter } from 'react-router-dom'
import Header from './components/header/header'
import Nav from './components/navbar/nav'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
