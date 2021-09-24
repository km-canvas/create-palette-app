const styles = {
	colorPickerCtn: {
		width: "100%",
		marginBottom: "1rem",
		height: "300px",
	},
	chromePicker: {
		minWidth: "100%",
	},
	swatchPicker: {
		minWidth: "100%",
	},
	switchPickerCtn: {
		height: "50px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "1rem 0 0",
		backgroundColor: "white",
		borderRadius: "2px 2px 0 0",
		boxShadow: "rgb(0 0 0 / 30%) 0px 0px 2px, rgb(0 0 0 / 30%) 0px 4px 8px",
	},
	activeTxt: {
		color: "black",
		transition: "color 0.2s"
	},
	nonActiveTxt: {
		color: "gray",
		opacity: "70%",
		transition: "color 0.2s"
	},
	addColorBtn: {
		width: "100%",
		padding: "0.5rem",
		marginTop: "1rem",
		fontSize: "1.5rem"
	},
	colorNameInput: {
		width: "100%",
		height: "70px"
	}
}
export default styles;