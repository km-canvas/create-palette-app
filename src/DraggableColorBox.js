import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		position: "relative",
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		marginBottom: "-4px",
	}
}

function DraggableColorBox(props) {
	return (
		<div className={props.classes.root} style={{backgroundColor: props.color}}>
			{props.color}
		</div>
	)
}

export default withStyles(styles)(DraggableColorBox)

