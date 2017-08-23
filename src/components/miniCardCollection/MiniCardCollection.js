import React, { Component } from 'react';

class MiniCardCollection extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
	  	};
	}

	render() {
		const { tab1, tab2, title } = this.props;
		const img = { url:'https://a0.muscache.com/im/pictures/4913407/6ceaefb6_original.jpg'};
	return (
	  <div className="miniCardCollection">
	  	<div className="miniCardCollection-title">
	  		<div className="miniCardCollection-title-bold">{title}</div>
	  		<div>Lihat Semua</div>
	  	</div>
	  	<div className="miniCardCollection-content">
	  		<div className="miniCardCollection-slider">
	  			<div className="miniCardCollection-card">
	  				<img className="miniCardCollection-img" src={img.url} alt="x"></img>
	  				<div className="miniCardCollection-card-title">Jakarta</div>
	  				<div><span>Mulai dari</span><b> Rp. 500.000</b></div>
	  			</div>
	  			<div className="miniCardCollection-card">
	  				<img className="miniCardCollection-img" src={img.url} alt="x"></img>
	  				<div className="miniCardCollection-card-title">Jakarta</div>
	  				<div><span>Mulai dari</span><b> Rp. 500.000</b></div>
	  			</div>
	  			<div className="miniCardCollection-card">
	  				<img className="miniCardCollection-img" src={img.url} alt="x"></img>
	  				<div className="miniCardCollection-card-title">Jakarta</div>
	  				<div><span>Mulai dari</span><b> Rp. 500.000</b></div>
	  			</div>
	  			<div className="miniCardCollection-card">
	  				<img className="miniCardCollection-img" src={img.url} alt="x"></img>
	  				<div className="miniCardCollection-card-title">Jakarta</div>
	  				<div><span>Mulai dari</span><b> Rp. 500.000</b></div>
	  			</div>
	  			<div className="miniCardCollection-card">
	  				<img className="miniCardCollection-img" src={img.url} alt="x"></img>
	  				<div className="miniCardCollection-card-title">Jakarta</div>
	  				<div><span>Mulai dari</span><b> Rp. 500.000</b></div>
	  			</div>
	  		</div>
	  	</div>
	  </div>
	);
	}
}

export default MiniCardCollection;
