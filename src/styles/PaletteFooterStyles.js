import screen from './mediaQueries';
import navPrismGradient from "./navbg.svg";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	PaletteFooter: {
		height: "5vh",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold",
		boxShadow: "0 0 1px #fff, 0 -1px 2px #5e5e5e",
		zIndex: 2,	
		backgroundColor: "#FFF",
		backgroundImage: `url(${navPrismGradient})`,
		// background by SVGBackgrounds.com
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		[screen.down("md")]: {
			display: "none"
		}
	},
	emoji: {
		fontSize: "1.5rem",
		margin: "0 1rem"
	}
}
