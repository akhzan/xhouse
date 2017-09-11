import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div>{this.props.children}</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
