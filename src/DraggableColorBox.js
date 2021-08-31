import React from 'react'
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const styles = {
	root: {
		position: "relative",
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		marginBottom: "-4px",
		"&:hover svg": {
			color: "white",
			transform: "scale(1.5)"
		}
	},
	boxContent: {
		position: "absolute",
		left: "0",
		bottom: "0",
		width: "100%",
		padding: "0.4em",
		color: "rgba(0, 0, 0, 0.5)",		
		fontSize: "0.8rem",
		letterSpacing: "1px",
		textTransform: "uppercase",
		display: "flex",
		justifyContent: "space-between"
	},
	deleteIcon: {
		fontSize: "1rem",
		transition: "all 0.2s ease-in-out",
	}
}

const DraggableColorBox = SortableElement( (props) => {
	const { name, color, classes, handleDelete } = props;
	return (
		<div className={classes.root} style={{backgroundColor: color}}>
			<div className={classes.boxContent} >
				<span>
					{name}
				</span>
				<DeleteForeverIcon className={classes.deleteIcon} onClick={handleDelete}/>
			</div>
		</div>
	)
})

export default withStyles(styles)(DraggableColorBox)

