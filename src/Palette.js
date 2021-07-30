import React, { Component } from 'react';
import Slider from 'rc-slider';
import ColorBox from './ColorBox';
import "./Palette.css";
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
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
				{/* Navbar goes here */}
				<Slider 
					defaultValue={level} 
					min={100} 
					max={900}
					step={100} // step defines the plus/minus value for each allowed interval between min/max on slider 
					onChange={this.changeLevel} 
					// onAfterChange={this.changeLevel} 
					//onAfterChange is a built-in function from Slider (triggered ontouchend or onmouseup)
				/>
				<div className="Palette-colors">
					{colorBoxes}
				</div>
				{/* Footer goes here */}
			</div>
		)
	}
}