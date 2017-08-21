import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

class Navigation extends Component {
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
	  <div className="navigation">
	  	<div className="navigation-bar">
	  	<AppBar position="static">
	      <Tabs value={this.state.value} onChange={this.handleChange}>
	      	<Tab label='Destinasi' />
	      	<Tab label='Populer' />
	      	<Tab label='Promo' />
	      </Tabs>
	    </AppBar>
	    </div>
	    {tab1}
	  </div>
	);
	}
}

export default Navigation;