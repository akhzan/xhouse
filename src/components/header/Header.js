import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <nav className="nav">
          <ul>
            <li><button><span>Menjadi Babu</span></button></li>
            <li><button><span>Bantuan</span></button></li>
            <li><button><span>Daftar</span></button></li>
            <li><button><span>Log Masuk</span></button></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
