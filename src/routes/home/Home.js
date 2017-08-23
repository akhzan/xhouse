import React, { Component } from 'react';
import { MdSearch } from 'react-icons/lib/md';
import TextField from 'material-ui/TextField';
import Navigation from '../../components/navigation/Navigation';
import MiniCardCollection from '../../components/miniCardCollection/MiniCardCollection';

class Home extends Component {
  render() {
    return (
      <div className="home">
	      <div className="home-header-container">
	      	<div className="home-header">
	      		<div className="home-name">Babubnb</div>
	      		<div className="home-desc">Sewa babu-babu profesional untuk setiap pekerjaan dan kendala anda</div>
	      		<div className="home-search">
	      			<div className="home-search-var border-right">
	      				<div className="home-search-item">
		      				<TextField
					          id="swhere"
					          label="Dimana saja"
					          className="home-search-input"
					        />
				        </div>
	      			</div>
	      			<div className="home-search-var border-right">
	      				<div className="home-search-item">
		      				<TextField
					          id="date"
					          label="Kapan saja"
					          type="date"
					          className="home-search-input"
					          InputLabelProps={{
					            shrink: true,
					          }}
					        />
				        </div>
	      			</div>
	      			<div className="home-search-var home-search-var-with-button">
	      				<div className="home-search-item">
	      					<TextField
					          id="num"
					          label="Siapa saja"
					          type="number"
					          className="home-search-input"
					        />
	      				</div>
	      				<div className="home-search-btn-container">
	      					<button className="home-search-btn"><MdSearch /></button>
	      				</div>
	      			</div>
	      		</div>
	      		<div className="home-content-navigation">
	      			<Navigation 
	      				tab1={<MiniCardCollection title="Destinasi"></MiniCardCollection>} 
	      				tab2={<MiniCardCollection title="Populer"></MiniCardCollection>}
	      				tab3={<MiniCardCollection title="Promo"></MiniCardCollection>}
      				>
      				</Navigation>
	      		</div>
	      	</div>
	      </div>
      </div>
    );
  }
}

export default Home;
