import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';
import TooltipStyles from './styles/tooltipStyles';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 format: "hex",
			 open: false,
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
		const { level, changeLevel, isFullPalette, classes } = this.props;
		const { format } = this.state;
		const smallRadio = (
				<Radio 
					color="default" 
					icon={<RadioButtonUncheckedIcon fontSize="small" />}
					checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
				/>)
		return (
			<nav className={classes.Navbar}>
				<TooltipStyles />
				<div className={classes.NavbarLogo}>
					<Link to="/">
						ColorApp
					</Link>
				</div>
				{isFullPalette && (
					<div className={classes.NavbarSlider}>
						<div className={classes.slider}>
							<Slider 
								defaultValue={level} 
								min={100} 
								max={900}
								step={100}
								dots
								included={false}
								onChange={changeLevel}
								/>									
						</div>
						<Tooltip 
							TransitionComponent={Fade} 
							TransitionProps={{ timeout: 600 }} 
							title="Adjust color levels to lighter or darker."
							placement="bottom-end"
						>
							<HelpOutlineIcon color="disabled" fontSize="small" />
						</Tooltip>
					</div>
					)
				}
				<div className={classes.radioContainer}>
					<FormControl component="fieldset" margin="none">
						<RadioGroup
							aria-label="Color Format"
							row={true}
							name="format"
							value={format}
							onChange={this.handleFormatChange}
						>
							<Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} 
								placement="bottom-end"
								title="Format: #ffffff"
							>
								<FormControlLabel value="hex" label="HEX" control={smallRadio} />
							</Tooltip>
							<Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} 
								placement="bottom-end"
								title="Format: rgb(255, 255, 255)"
							>
								<FormControlLabel value="rgb"label="RGB" control={smallRadio} />
							</Tooltip>
							<Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}
								placement="bottom-end"
								title="Format: rgba(255, 255, 255, 1.0)"
							>
								<FormControlLabel value="rgba" label="RGBA" control={smallRadio} />
							</Tooltip>
						</RadioGroup>
					</FormControl>
					<Tooltip 
						TransitionComponent={Fade} 
						TransitionProps={{ timeout: 600 }} 
						title="Choose a color format for your palette."
						placement="bottom-end"
					>
						<HelpOutlineIcon color="disabled" fontSize="small" style={{marginRight: "15px"}}/>
					</Tooltip>
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

export default withStyles(styles)(Navbar);
