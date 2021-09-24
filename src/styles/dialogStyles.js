import { withStyles } from '@material-ui/styles';
import bgPrismGradient from "./navbg.svg";

const DialogStyles = withStyles({
	"@global": {
		".MuiDialogTitle-root": {
			backgroundColor: "#EEE",
			backgroundImage: `url(${bgPrismGradient})`,
			// background by SVGBackgrounds.com
			backgroundAttachment: "fixed",
			backgroundSize: "cover"
		},
		".emoji-mart-search": {
			marginBottom: "6px"
		},
		".emoji-mart": {
			width: "100% !important"
		},
		".MuiAvatar-circular": {
			transition: "border 150ms ease-in"
		},
		".MuiListItem-button": {
			transition: "all 150ms ease-in-out"
		},
		".MuiListItem-button:hover": {
			backgroundColor: "inherit",
			boxShadow: "0 1px 1px #fff, 0 2px 4px #000",
			"& .MuiAvatar-circular": {
				border: "2px solid"
			},
		}
	}
})(() => null);


export default DialogStyles;