/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	level: {
		maxWidth: "8in",
		height: "10in",
		pageBreakBefore: "always",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",

		"& h4": {
			paddingRight: "1rem"
		}
	},
	table: {
		width: "100%",
		height: "100%",
		border: "5px solid black",
		margin: "1rem auto",
		padding: "0 0.5rem",
		borderCollapse: "collapse",
		"& tr": {
			height: "40px"
		},
		"& th, td:not(:first-child)": {
			padding: "0.5rem",
			border: "1px solid #ddd",
			textAlign: "left",
		}
	},
	preview: {
		width: "100%",
		height: "100%",
	}
}