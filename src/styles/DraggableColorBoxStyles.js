import screen from './mediaQueries';
import red from '@material-ui/core/colors/red';

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
		[screen.down('md')]: {
			width: props => (props.open) ? "100%" : "50%",
			height: props => (props.open) ? "5%" : "10%",
		},
		[screen.down('sm')]: {
			width: "100% !important",
			height: "5% !important",
		},
	},
	colorHexContent: {
		position: "absolute",
		left: "0",
		top: "0",
		color: "rgba(0, 0, 0, 0.5)",
		padding: "0.4em",
	},
	boxContent: {
		position: "absolute",
		left: "0",
		bottom: "0",
		width: "100%",
		padding: "0.4rem 0.6em 0.4rem 0.2rem",
		color: "rgba(0, 0, 0, 0.5)",		
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