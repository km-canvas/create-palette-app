/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	root: {
		position: "relative",
		backgroundColor: "white", 
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer"
		}
	},
	colors: {
		backgroundColor: "#dae1e4",
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden"
	},
	title: {
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem"
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem"
	},
	miniColor: {
		height: "25%",
		width: "20%",
		display: "inline-block",
		margin: "0 auto -4px",
		position: "relative"
	}
}