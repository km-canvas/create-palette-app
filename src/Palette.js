import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import "./Palette.css";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 level: 500,
			 format: "hex"
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(newLevel) {
		this.setState({ level: newLevel})
	}
	changeFormat(val) {
		this.setState({ format: val })
	}
	render() {
		const { colors } = this.props.palette;
		const { level, format } = this.state;
		// palette.colors[starting value] for initial display
		const colorBoxes = colors[level].map(color => {
			return <ColorBox background={color[format]} name={color.name} />
		})
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
				<div className="Palette-colors">
					{colorBoxes}
				</div>
				{/* Footer goes here */}
			</div>
		)
	}
}
export default Palette;