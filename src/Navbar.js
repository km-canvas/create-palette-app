import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;
		return (
			<nav className="Navbar">
				<div className="Navbar-logo">
				 {/* eslint-disable-next-line */}
					<a href="#">
						<i class="fas fa-palette"></i> 
						ColorApp
					</a>
				</div>
				<div className="slider-container">
					<span>Level: {level} </span>
					<div className="slider">
						<Slider 
							defaultValue={level} 
							min={100} 
							max={900}
							step={100}
							onChange={changeLevel} 
							/>									
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;
