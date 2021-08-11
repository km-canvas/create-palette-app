import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	main: {
		backgroundColor: "purple",
		border: "3px solid teal",
		"& h1": {
			color: "white"
		}
	}
}

function MiniPalette(props) {
	const {classes} = props; // from material-ui 
 	return (
		// classes.main creates unique html classname with help from built in functions from material-ui styles
		// the "main" class defined in styles object above is only scoped to this component
		// We can redefine "main" in another component and it won't affect this component's styles
		<div className={classes.main}>
			<h1>Mini Palette</h1>
		</div>
	)
}

export default withStyles(styles)(MiniPalette);