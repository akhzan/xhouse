import React, { Component } from 'react';

class MiniCardCollection extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
	  	};
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { tab1, tab2 } = this.props;
		const img = { url:'https://a0.muscache.com/im/pictures/4913407/6ceaefb6_original.jpg'};
	return (
	  <div className="miniCardCollection">
	  	<div className="miniCardCollection-title">
	  		<div className="miniCardCollection-title-bold">Destinasi</div>
	  		<div>Lihat Semua</div>
	  	</div>
	  	<div className="miniCardCollection-content">
	  		<div className="miniCardCollection-slider">
	  			<img className="miniCardCollection-img" src={img.url}></img>
	  			<img className="miniCardCollection-img" src={img.url}></img>
	  			<img className="miniCardCollection-img" src={img.url}></img>
	  			<img className="miniCardCollection-img" src={img.url}></img>
	  			<img className="miniCardCollection-img" src={img.url}></img>
	  		</div>
	  	</div>
	  </div>
	);
	}
}

export default MiniCardCollection;
