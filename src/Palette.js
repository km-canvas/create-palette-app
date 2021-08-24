import React, { Component } from 'react';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
// import "./Palette.css";

const styles = {
	Palette: {
		height: "100vh",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column"
	},
	PaletteColors: {
		height: "90%"
	}
}

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
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		// palette.colors[starting value] for initial display
		const colorBoxes = colors[level].map(color => {
			return <ColorBox 
				background={color[format]} 
				name={color.name} 
				key={color.id} 
				colorId={color.id} 
				paletteId={id}
				showingFullPalette={true}
				/>
		})
		return (
			<div className={classes.Palette}>
				<Navbar 
					level={level} 
					changeLevel={this.changeLevel} 
					handleChange={this.changeFormat} 
					isFullPalette
				/>
				<div className={classes.PaletteColors}>
					{colorBoxes}
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}
export default withStyles(styles)(Palette);