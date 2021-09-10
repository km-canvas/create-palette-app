/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	root: {
		position: "relative",
		backgroundColor: "white", 
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		cursor: "pointer",
		"&:hover div:first-child": {
			opacity: 1
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
		fontSize: "1rem"
	},
	miniColor: {
		height: "25%",
		width: "20%",
		display: "inline-block",
		margin: "0 auto -4px",
		position: "relative"
	},
	deleteCtn: {
		position: "absolute",
		right: "-10px",
		top: "-10px",
		zIndex: 10,
		opacity: 0,
	},
	deleteIcon: {
		width: "30px",
		height: "30px",
		padding: "4px",
		color: "white",
		backgroundColor: "#eb3d30",
		borderRadius: "5px",
		boxShadow: "0 0px 2px #fff, 2px 2px 4px #000",
		opacity: 0.5,
		transition: "all 0.3s ease-in-out",
		"&:hover": {
			opacity: 1,
		}
	}
}