import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Home from '../home/Home';
import Footer from '../../components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
