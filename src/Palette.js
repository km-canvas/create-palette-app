import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import "./Palette.css";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 level: 500
		};
		this.changeLevel = this.changeLevel.bind(this);
	}
	changeLevel(newLevel) {
		this.setState({ level: newLevel})
	}
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		// palette.colors[starting value] for initial display
		const colorBoxes = colors[level].map(color => {
			return <ColorBox background={color.hex} name={color.name} />
		})
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} />
				<div className="Palette-colors">
					{colorBoxes}
				</div>
				{/* Footer goes here */}
			</div>
		)
	}
}
export default Palette;