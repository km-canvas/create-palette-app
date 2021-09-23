import { withStyles } from '@material-ui/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const CustomMUIStyles = withStyles({
	"@global": {
		".MuiButton-contained": {
			backgroundColor: blueGrey[50],
			'&:hover': {
				backgroundColor: blueGrey[100],
			},
		},
		".MuiButton-containedPrimary": {
			backgroundColor: blueGrey[400],
			'&:hover': {
				backgroundColor: blueGrey[600],
			},
		},
		".MuiButton-outlinedPrimary": {
			color: blueGrey[400],
			border: `1px solid ${blueGrey[400]}`, 
			'&:hover': {
				border: `1px solid ${blueGrey[400]}`,
				backgroundColor: blueGrey[50],
			},
		},
		".MuiInputBase-input, .MuiFormLabel-root, .MuiFormLabel-root.Mui-focused": {
			color: blueGrey[800]
		},
		".MuiInput-underline:after": {
				borderBottom: `2px solid ${blueGrey[600]}`
		},
		".MuiFilledInput-root": {
			backgroundColor: "rgba(0, 0, 0, 0.1)",
		},
		".MuiFilledInput-underline:after": {
				borderBottom: `2px solid ${blueGrey[600]}`
		},
	}
})(() => null);


export default CustomMUIStyles;