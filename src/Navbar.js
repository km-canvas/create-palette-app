import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 format: "hex",
			 open: false
		}
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	handleFormatChange(evt) {
		this.setState({ format: evt.target.value, open: true });
		this.props.handleChange(evt.target.value);
	}
	closeSnackbar(evt) {
		this.setState({ open: false })
	}
	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<nav className="Navbar">
				<div className="Navbar-logo">
					<div className="Navbar-icons">
						<span>
							<i className="fas fa-palette shadow"></i> 
							<i className="fas fa-palette"></i> 
						</span>
					</div>
					<Link to="/">
						ColorApp
					</Link>
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
				<div className="select-container">
					<span>Format: </span>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar 
					anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
					ContentProps={{"aria-describedby": "message-id"}}
					onClose={this.closeSnackbar}
					action={[
						<IconButton size="small" key="close" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
					]}
				/>
			</nav>
		)
	}
}

export default Navbar;
