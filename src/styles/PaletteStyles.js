import screen from "./mediaQueries";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	Palette: {
		height: "100vh",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
	},
	PaletteColors: {
		height: "90%",
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
			borderRadius: "5px",
			background: "rgba(255,255,255,0.3)",
			fontSize: "1rem",
			lineHeight: "30px",
			textAlign: "center",
			textTransform: "uppercase",
			cursor: "pointer",
			textDecoration: "none",
			"&::before": {
				position: "absolute",
				left: "0",
				top: "0",
				width: "100%",
				height: "10px",
				borderTop: "1px solid #fff",
				borderRadius: "5px",
				content: "' '",
				opacity: "0",
				webkitTransition: "opacity 0.3s, -webkit-transform 0.3s",
				mozTransition: "opacity 0.3s, -webkit-transform 0.3s",
				transition:"opacity 0.3s, -webkit-transform 0.3s",
				webkitTransform: "translateY(-5px)",
				mozTransform:"translateY(-5px)",
				transform: "translateY(-5px)",
			},
			"&::after": {
				position: "absolute",
				left: "0",
				bottom: "0",
				width: "100%",
				height: "10px",
				borderBottom: "1px solid #fff",
				borderRadius: "5px",
				content: "' '",
				opacity: "0",
				webkitTransition: "opacity 0.3s, -webkit-transform 0.3s",
				mozTransition: "opacity 0.3s, -webkit-transform 0.3s",
				transition:"opacity 0.3s, -webkit-transform 0.3s",
				webkitTransform: "translateY(5px)",
				mozTransform:"translateY(5px)",
				transform: "translateY(5px)",
			},
			"&:hover": {
				backgroundColor: "transparent"
			},
			"&:focus": {
				backgroundColor: "transparent"
			},
			"&:hover::before": {
				opacity: "1",
				webkitTransform: "translateY(0px)",
				mozTransform: "translateY(0px)",
				transform: "translateY(0px)"
				},
			"&:hover::after": {
				opacity: "1",
				webkitTransform: "translateY(0px)",
				mozTransform: "translateY(0px)",
				transform: "translateY(0px)"
				},
			"&:focus::before": {
				opacity: "1",
				webkitTransform: "translateY(0px)",
				mozTransform: "translateY(0px)",
				transform: "translateY(0px)"
			},
			"&:focus::after": {
				opacity: "1",
				webkitTransform: "translateY(0px)",
				mozTransform: "translateY(0px)",
				transform: "translateY(0px)"
			}
		},
		[screen.down("lg")]: {
			width: "50%",
			height: "20%"
		},
		[screen.down("xs")]: {
			width: "100%",
			height: "10%"
		}
	}
}