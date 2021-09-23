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
	}
})(() => null);


export default DialogStyles;