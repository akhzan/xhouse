import React, { Component } from 'react';

class Showcase extends Component {
	constructor() {
		super();
	}

	render() {
		const { x } = this.props;
		const img = { url:'xxx'};
	return (
	  	<div className="showcase">
			<div className="showcase-content">
				<div className="showcase-card">
					<img className="showcase-img" src={img.url} alt="x"></img>
					<div className="showcase-card-title">Jakarta<span>----badge</span></div>
					<div className="showcase-card-tagline">The best babu ever bro!</div>
					<div><span>Mulai dari</span><b> Rp. 500.000</b></div>
					<div className="showcase-value">
						<div className="showcase-star">Star</div>
						<div className="showcase-review">Review</div>
					</div>
				</div>
			</div>
	  	</div>
	);
	}
}

export default Showcase;
