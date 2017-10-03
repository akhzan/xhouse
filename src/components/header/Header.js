import React, { Component } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/lib/md';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  expandMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="logo-container">
            <div className="logo"></div>
          </div>
          <nav className="nav">
            <ul>
              <li><button><span>Menjadi Babu</span></button></li>
              <li><button><span>Bantuan</span></button></li>
              <li><button><span>Daftar</span></button></li>
              <li><button><span>Masuk</span></button></li>
              <Link to="/popular/x">brekele</Link>
            </ul>
          </nav>
          <button className="header-expander" onClick={this.expandMenu}><MdExpandMore /></button>
        </div>
        <Drawer 
          anchor="top"
          open={this.state.open}
          onRequestClose={this.expandMenu}
          ignoreBackdropClick={false}
        >
          <div className="header-drawer-container">
            <div className="header-drawer-logo">
              <button className="header-expander" onClick={this.expandMenu.bind(this)}><MdExpandLess /></button>
            </div>
            <div className="header-drawer-content-container">
              <div className="header-drawer-content">
                <a href="/" onClick={this.expandMenu.bind(this)}><div className="header-drawer-nav">Beranda</div></a>
                <a><Link to="/popular"><div className="header-drawer-nav">Manjadi Babu</div></Link></a>
                <a><div className="header-drawer-nav">Daftar</div></a>
                <a><div className="header-drawer-nav">Masuk</div></a>
                <a><div className="header-drawer-nav">Bantuan</div></a>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
