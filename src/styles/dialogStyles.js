import { withStyles } from '@material-ui/styles';
import bgPrismGradient from "./navbg.svg";

const DialogStyles = withStyles({
	"@global": {
		".MuiDialogTitle-root": {
			backgroundColor: "#EFE9DB",
			backgroundImage: `url(${bgPrismGradient})`,
			// background by SVGBackgrounds.com
			backgroundAttachment: "fixed",
			backgroundSize: "cover"
		},
	}
})(() => null);

export default DialogStyles;