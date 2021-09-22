import { withStyles } from '@material-ui/styles';

const TooltipStyles = withStyles({
	"@global": {
		".MuiTooltip-tooltip": {
			fontSize: "0.8rem",
			padding: "0.5rem"
		},
		".MuiTooltip-tooltipPlacementBottom": {
			marginTop: "0px",
		}
	}
})(() => null);

export default TooltipStyles;