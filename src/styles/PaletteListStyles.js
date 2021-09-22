import screen from "./mediaQueries";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	root: {
		backgroundColor: "gray",
		height: "100%",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center"
	},
	container: {
		width: "60%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[screen.down('xl')]: {
			width: "80%"
		},
		[screen.down('xx')]: {
			width: "90%"
		}
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white"
		}
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(4, 25%)",
		gridGap: "1.5rem",
		justifyContent: "center",
		[screen.down('lg')]: {
			gridTemplateColumns: "repeat(3, 30%)",
		},
		[screen.down('md')]: {
			gridTemplateColumns: "repeat(2, 40%)",
		},
		[screen.down('sm')]: {
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[screen.down('xs')]: {
			gridTemplateColumns: "repeat(1, 80%)",
		},
		[screen.down('xx')]: {
			gridTemplateColumns: "repeat(1, 100%)",
		}
	}
}
