import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './main.scss';
import Header from './components/header/header'
import Nav from './components/navbar/nav'
import Main from './components/Main'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
