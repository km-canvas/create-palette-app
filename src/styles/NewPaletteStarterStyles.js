import screen from "./mediaQueries";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	root: {
		width: "100%",
		height: "100%",
		margin: "0 auto",
		padding: "1rem 2rem",
		[screen.down("xs")]: {
			padding: "0.5rem",
		}
	},
	MiniPaletteCardCtn: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 25%)",
		gridGap: "1.5rem",
		justifyContent: "center",
		[screen.down("xl")]: {
			gridTemplateColumns: "repeat(3, 30%)",
		},
		[screen.down("lg")]: {
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[screen.down("sm")]: {
			gridTemplateColumns: "repeat(1, 80%)",
		},
		[screen.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
		}
	},
	card: {
		boxSizing: "border-box",
		width: "100%",
		display: "flex",
		alignItems: "flex-start",
		boxShadow: "rgb(0 0 0 / 30%) 0px 0px 2px, rgb(0 0 0 / 30%) 0px 4px 8px",
  },

}