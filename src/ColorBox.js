import React, { Component } from 'react';
import "./ColorBox.css";

export class ColorBox extends Component {
	render() {
		const { background, name } = this.props;
		return (
			<div style={{background: background}} className="ColorBox">
				<span>{name}</span>
				<span>More</span>
			</div>
		)
	}
}

export default ColorBox;
