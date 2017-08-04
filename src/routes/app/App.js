import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Home from '../home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
    );
  }
}

export default App;
