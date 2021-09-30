import screen from './mediaQueries';
import navPrismGradient from "./navbg.svg";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "5vh",
		boxShadow: "0 0 1px #fff, 0 1px 2px #333",
		zIndex: 2,	
		backgroundColor: "#FFF",
		backgroundImage: `url(${navPrismGradient})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		// background by SVGBackgrounds.com
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
		"& a": {
			borderRadius: "200px",
			textDecoration: "none",
			padding: "0.25rem 0.5rem",
			color: "#000",
			transition: "all 0.3s ease-in-out",
			"&:hover": {
				boxShadow: "0 1px 1px #fff, 1px 2px 4px #000"
			},
			[screen.down("md")]: {
				marginTop: "-8px"
			}
		},
		[screen.down("md")]: {
			width: "100%",
			height: "50%",
		}
	},
	NavbarSlider: {
		width: "340px",
		display: "flex",
		[screen.down("md")]: {
			margin: "-8px auto 0",
			width: "90%",		
		},
		[screen.down("xx")]: {
			margin: "0 auto",
		}
	},
	slider: {
		width: "100%",
		margin: "0 20px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-rail": {
			marginTop: "-2px",
			marginLeft: "-3px",
			height: "12px",
			width: "calc(100% + 10px)",
			background: "linear-gradient(to right, #eee, #6f8b98)",
			boxShadow: "0 0 1px #fff, 0 1px 2px #000",
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
			outline: "none",
			boxShadow: "none",
			width: "20px",
			height: "20px",
			marginTop: "-6px",
		},
		"& .rc-slider-handle, .rc-slider-handle:focus": {
			backgroundColor: "#eee",
			border: "2px solid #6f8b98",
			marginLeft: "3px"
		},
		"& .rc-slider-handle:active, .rc-slider-handle:hover": {
			backgroundColor: "#6f8b98",
			border: "2px solid #eee"
		},
		"& .rc-slider-dot": {
			top: "0px",
			bottom: "0px",
			marginLeft: "-3px",
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
		},
		[screen.down("xx")]: {
			display: "none",	
		}
	},
}