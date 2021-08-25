/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "6vh"
	},
	NavbarLogo: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		marginRight: "15px",
		padding: "0 13px",
		fontFamily: "'Roboto', sans-serif",
		fontSize: "22px",
		backgroundColor: "#d5d5d5",
		"& a": {
			textDecoration: "none",
			color: "#000"
		}
	},
	slider: {
		width: "340px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-rail": {
			marginTop: "-2px",
			height: "12px",
			background: "linear-gradient(to right, #e9e9e9, #6f6f6f)"
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
			outline: "none",
			boxShadow: "none",
			width: "18px",
			height: "18px",
			marginTop: "-6px",
		},
		"& .rc-slider-handle, .rc-slider-handle:focus": {
			backgroundColor: "#a9a9a9",
			border: "2px solid #000"
		},
		"& .rc-slider-handle:active, .rc-slider-handle:hover": {
			backgroundColor: "#000",
			border: "2px solid #000"
		}
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem"
	}
}