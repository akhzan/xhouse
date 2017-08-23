import React, { Component } from 'react';

class Footer extends Component {
	constructor() {
		super();
	}

	render() {
		const { x } = this.props;
	return (
	  <div className="footer">
	  	<div className="footer-container">
	  		<div className="footer-main">
	  			<div className="footer-item">
	  				<div className="footer-item-title">Babubnb</div>
	  				<ul>
	  					<li><a href="#">Tentang kami</a></li>
	  					<li><a href="#">Karir</a></li>
	  					<li><a href="#">Kontak</a></li>
	  				</ul>
	  			</div>
	  			<div className="footer-item">
	  				<div className="footer-item-title">Temukan</div>
	  				<ul>
	  					<li><a href="#">Destinasi</a></li>
	  					<li><a href="#">Populer</a></li>
	  					<li><a href="#">Promo</a></li>
	  					<li><a href="#">Prewedding/Wedding</a></li>
	  					<li><a href="#">Commerce</a></li>
	  					<li><a href="#">Holiday</a></li>
	  				</ul>
	  			</div>
	  			<div className="footer-item">
	  				<div className="footer-item-title">Bergabung</div>
	  				<ul>
	  					<li><a href="#">Jadi babu</a></li>
	  					<li><a href="#">Promosi</a></li>
	  				</ul>
	  			</div>
	  			<div className="footer-item">
	  				<div className="footer-item-title">Bantuan</div>
	  				<ul>
	  					<li><a href="#">Pembayaran</a></li>
	  					<li><a href="#">Pengembalian</a></li>
	  					<li><a href="#">FAQ</a></li>
	  				</ul>
	  			</div>
	  		</div>
	  		<div className="footer-logo-container">
	  			<div className="footer-logo">
	  				<div>&copy; Babubnb</div>
	  			</div>
	  		</div>
	  	</div>	  	
	  </div>
	);
	}
}

export default Footer;
