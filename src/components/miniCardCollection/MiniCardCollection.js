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
	return (
	  <div className="miniCardCollection">
	  	<div className="miniCardCollection-title">
	  		<div className="miniCardCollection-title-bold">Title</div>
	  		<div>Lihat Semua</div>
	  	</div>
	  </div>
	);
	}
}

export default MiniCardCollection;
