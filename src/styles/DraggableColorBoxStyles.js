import red from '@material-ui/core/colors/red';
import screen from './mediaQueries';
import chroma from 'chroma-js';

const styles = {
	root: {
		position: "relative",
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		marginBottom: "-6px",
		"&:hover svg": {
			borderRadius: "50%",
			color: "white",
			transform: "scale(1.5)",
			"&:hover": {
				color: red[600],
				backgroundColor: red[50],
				boxShadow: "0 0 1px #fff, 0 1px 2px #000"
			}
		},
		[screen.down('xl')]: {
			width: props => (props.open) ? "25%" : "20%",
			height: props => (props.open) ? "20%" : "25%",
		},
		[screen.down('lg')]: {
			width: props => (props.open) ? "50%" : "25%",
			height: props => (props.open) ? "10%" : "20%",
		},
		[screen.down('sm')]: {
			width: props => (props.open) ? "100%" : "50%",
			height: props => (props.open) ? "5%" : "10%",
		},
		[screen.down('xs')]: {
			width: props => (props.open || !props.open) && "100%",
			height: props => (props.open || !props.open) && "5%",
		},
	},
	colorHexContent: {
		position: "absolute",
		left: "0",
		top: "0",
		color: props => 
			chroma(props.color).luminance() <= 0.08 
				? "rgba(255, 255, 255, 0.8)" 
				: "rgba(0, 0, 0, 0.6)",
		padding: "0.4em",
	},
	boxContent: {
		position: "absolute",
		left: "0",
		bottom: "0",
		width: "100%",
		padding: "0.4rem 0.6em 0.4rem 0.2rem",
		color: props => 
			chroma(props.color).luminance() <= 0.08 
				? "rgba(255, 255, 255, 0.8)" 
				: "rgba(0, 0, 0, 0.6)",
		fontSize: "0.8rem",
		letterSpacing: "1px",
		textTransform: "uppercase",
		display: "flex",
		justifyContent: "space-between"
	},
	deleteIcon: {
		fontSize: "1rem",
		transition: "all 0.3s ease-in-out",
	}
}
export default styles;