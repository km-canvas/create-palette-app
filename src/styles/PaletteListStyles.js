import screen from "./mediaQueries";
import bgPrismGradient from "./bgPrism.svg";
import navPrismGradient from "./navbg.svg";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	"@global": {
		".fade-exit": {
			opacity: 1,
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out",
		}
	},
	root: {
		height: "100%",
		minHeight: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: "#EFE9DB",
		backgroundImage: `url(${bgPrismGradient})`,
		// background by SVGBackgrounds.com
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		paddingBottom: "5vh",
		overflowY: "scroll",
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
		color: "#333",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
		}
	},
	heading: {
		fontSize: "2rem",
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
	},
	createPaletteLink: {
		position: "relative",
		backgroundColor: "#FFF",
		backgroundImage: `url(${navPrismGradient})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
    // background by SVGBackgrounds.com 
		border: "1px solid black",
		borderRadius: "5px",
		padding: "1rem",
		cursor: "pointer",
		textDecoration: "none",
		color: "#000",
		boxShadow: "rgb(0 0 0 / 30%) 0px 2px 2px, rgb(0 0 0 / 30%) 0px 4px 6px",
		transition: "box-shadow 0.3s ease-in-out",
		"&:hover": {
			boxShadow: "rgb(0 0 0 / 30%) 0px 2px 2px, rgb(0 0 0 / 50%) 0px 4px 8px",
			"& div": {
				transform: "scale(0.95)",
			}
		}
	},
	createPaletteTxt: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		backgroundColor: "rgba(187,224,225,0.5)",
		borderRadius: "5px",
		border: "2px solid gray",
		padding: "1rem",
		transition: "transform 0.3s ease-in-out",
		"& h6": {
			fontWeight: "600"
		},
	}
}