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
		[screen.down('lg')]: {
			width: "25%",
			height: "20%"
		},
		[screen.down('md')]: {
			width: "100%",
			height: "5%"
		}
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