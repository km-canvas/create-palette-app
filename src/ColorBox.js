import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import "./ColorBox.css";

const styles = {
	ColorBox: {
		position: "relative",
		width: "20%",
		height: props => props.showingFullPalette ? "25%" : "50%",
		margin: "0 auto",
		display: "inline-block",
		marginBottom: "-4px",
		"&:hover button": {
			opacity: "1",
			transition: "0.5s"
		}
	},
	copyText: { 
		color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white" 
	},
	colorName: { 
		color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black" 
	},
	seeMore: {
		color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white",
		background: "rgba(255,255,255,0.3)",
		position: "absolute",
		right: "0px",
		bottom: "0px",
		padding: "0.2em 0.6em",
		fontSize: "0.8rem",
		letterSpacing: "1px",
		textTransform: "uppercase",
		textAlign: "center",
	},
	copyButton: {
		color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white",
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
		opacity: "0"
	},
	boxContent: {
		position: "absolute",
		left: "0",
		bottom: "0",
		width: "100%",
		padding: "0.2em",
		color: "black",
		fontSize: "0.8rem",
		letterSpacing: "1px",
		textTransform: "uppercase"
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transform: "scale(0.1)",
		transition: "transform 0.5s ease-in-out"
	},
	showOverlay: {
		opacity: "1",
		transform: "scale(50)",
		zIndex: "10",
		position: "absolute"
	},
	copyMessage: {
		position: "fixed",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "4rem",
		textAlign: "center",
		color: "white",
		opacity: "0",
		transform: "scale(0)",
		"& h1": {
			fontWeight: "400",
			textTransform: "uppercase",
			textShadow: "1px 2px #000",
			background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
			width: "100%",
			marginBottom: "0",
			padding: "1rem",
		},
		"& p": {
			fontSize: "2rem",
			fontWeight: "100",
		}
	},
	showMessage: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "11",
		transition: "all 0.4s ease-in-out",
		transitionDelay: "0.3s",
	}
}
class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 copied: false
		};
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState() {
		this.setState({copied: true}, () => {
			setTimeout(() => this.setState({copied: false}), 1500);
		})
	}
	
	render() {
		const { background, name, colorId, paletteId, showingFullPalette, classes } = this.props;
		const { copied } = this.state;
		return (
			<div style={{background: background}} className={classes.ColorBox}>
					<div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
					<div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
					<CopyToClipboard text={background} onCopy={this.changeCopyState}>
							<button className={classes.copyButton}>Copy</button>
					</CopyToClipboard>
					</div>
					{showingFullPalette && (
						<Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>	
		)
	}
}

export default withStyles(styles)(ColorBox);
