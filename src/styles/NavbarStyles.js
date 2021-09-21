import screen from './mediaQueries';
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "5vh",
		[screen.down('md')]: {
			display: "inline-block",
			height: "10vh"
		}
	},
	NavbarLogo: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		padding: "0 13px",
		fontFamily: "'Roboto', sans-serif",
		fontSize: "22px",
		backgroundColor: "rgba(228,232,233,1.0)",
		borderRadius: "0 300px 300px 0",
		"& a": {
			textDecoration: "none",
			color: "#000"
		},
		[screen.down("md")]: {
			width: "100%",
			height: "50%",
			borderRadius: "0",
		}
	},
	NavbarSlider: {
		width: "340px",
		display: "flex",
		[screen.down("md")]: {
			margin: "-10px auto 0",
			width: "90%",		
		}
	},
	slider: {
		width: "100%",
		margin: "0 15px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-rail": {
			marginTop: "-2px",
			height: "12px",
			background: "linear-gradient(to right, #e9e9e9, #6f6f6f)",
			[screen.down("md")]: {
				boxShadow: "0 0 1px #00000080, 0 1px 2px #000"		
			}
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
			outline: "none",
			boxShadow: "none",
			width: "18px",
			height: "18px",
			marginTop: "-5px",
		},
		"& .rc-slider-handle, .rc-slider-handle:focus": {
			backgroundColor: "#a9a9a9",
			border: "2px solid #000",
			marginLeft: "5px"
		},
		"& .rc-slider-handle:active, .rc-slider-handle:hover": {
			backgroundColor: "#000",
			border: "2px solid #000"
		},
		"& .rc-slider-dot": {
			top: "0px",
			bottom: "0px",
			"&:first-of-type, &:last-of-type": {
				display: "none"
			}
		}
	},
	radioContainer: {
		marginLeft: "auto",
		display: "flex",
		alignItems: "center",
		fontSize: "0.8rem",		
		[screen.down("md")]: {
			justifyContent: "center",
			marginTop: "-0.3rem"
		}
	},
	selectContainer: {
		display: "none",
		marginLeft: "auto",
		alignItems: "center",
		fontSize: "0.8rem",
		[screen.down("md")]: {
			display: "inline-block"
		}
	}
}