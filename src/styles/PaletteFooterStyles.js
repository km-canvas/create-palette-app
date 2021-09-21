import screen from './mediaQueries';
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	PaletteFooter: {
		backgroundColor: "#fff",
		height: "5vh",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold",
		[screen.down("md")]: {
			display: "none"
		}
	},
	emoji: {
		fontSize: "1.5rem",
		margin: "0 1rem"
	}
}
