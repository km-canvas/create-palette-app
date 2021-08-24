import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';


const styles = {
	Palette: {
		height: "100vh",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column"
	},
	PaletteColors: {
		height: "90%"
	},
	goBack: {
		position: "relative",
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		marginBottom: "-4px",
		opacity: "1",
		backgroundColor: "black",
		"& a": {
			color: "white",
			width: "100px",
			height: "30px",
			position: "absolute",
			display: "inline-block",
			top: "calc(50% - 15px)",
			left: "calc(50% - 50px)",
			outline: "none",
			border: "none",
			background: "rgba(255,255,255,0.3)",
			fontSize: "1rem",
			lineHeight: "30px",
			textAlign: "center",
			textTransform: "uppercase",
			cursor: "pointer",
			textDecoration: "none",
		}
	}
}

class SingleColorPalette extends Component {
	constructor(props){
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format: "hex"
		}
		this.changeFormat = this.changeFormat.bind(this);
	}
	gatherShades(palette, colorToFilterBy){
		let shades = [];
		let allColors = palette.colors;
		for(let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			)
		}
		return shades.slice(1);
	}
	changeFormat(val) {
		this.setState({ format: val })
	}

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = this._shades.map(color => (
			 <ColorBox 
				key={color.name} 
				name={color.name} 
				background={color[format]}
				showingFullPalette={false}
			  />
			))
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} isFullPalette={false} />
				<div className={classes.PaletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>Go Back</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default withStyles(styles)(SingleColorPalette);
