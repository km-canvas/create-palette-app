const styles = {
	root: {
		position: "relative",
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		marginBottom: "-6px",
		"&:hover svg": {
			color: "white",
			transform: "scale(1.5)"
		}
	},
	boxContent: {
		position: "absolute",
		left: "0",
		bottom: "0",
		width: "100%",
		padding: "0.4em",
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