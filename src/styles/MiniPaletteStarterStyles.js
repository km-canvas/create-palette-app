import screen from "./mediaQueries";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	root: {
		position: "relative",
		border: "1px solid black",
		borderRadius: "5px",
		cursor: "pointer",
	},
	colors: {
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
		[screen.down("lg")]: {
			height: "100px"
		},
		[screen.down("sm")]: {
			height: "80px"
		}
	},
	miniColor: {
		height: "50%",
		width: "10%",
		display: "inline-block",
		margin: "0 auto -3px",
		position: "relative",
	},
}