import React, { Component } from 'react';

class Footer extends Component {

currentYear() {
let dateToday = new Date();
let currentYear = dateToday.getFullYear();
return currentYear;
}

render() {
	return (
		<footer className="page-footer">
			<span id="year">{this.currentYear()}</span>
		</footer>
	);	
}

}

export default Footer;
