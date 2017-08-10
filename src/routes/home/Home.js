import React, { Component } from 'react';
import { MdSearch } from 'react-icons/lib/md';

class Home extends Component {
  render() {
    return (
      <div className="home">
	      <div className="home-header-container">
	      	<div className="home-header">
	      		<div className="home-name">Babubnb</div>
	      		<div className="home-desc">Sewa babu-babu profesional untuk setiap pekerjaan dan kendala anda</div>
	      		<div className="home-search">
	      			<div className="home-search-var border-right"></div>
	      			<div className="home-search-var border-right"></div>
	      			<div className="home-search-var home-search-var-with-button">
	      				<div></div>
	      				<div className="home-search-btn-container">
	      					<button className="home-search-btn"><MdSearch /></button>
	      				</div>
	      			</div>
	      		</div>
	      	</div>
	      </div>
      </div>
    );
  }
}

export default Home;
