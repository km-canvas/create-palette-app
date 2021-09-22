import React from 'react'
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement( (props) => {
	const { name, color, classes, handleDelete, hexShowing } = props;
	return (
		<div className={classes.root} style={{backgroundColor: color}}>
			<div className={classes.colorHexContent}>
			{hexShowing ? (
				<span>{color}</span>
			) : null }
			</div>
			<div className={classes.boxContent} >
				<span>{name}</span>
				<DeleteForeverIcon className={classes.deleteIcon} onClick={handleDelete}/>
			</div>
		</div>
	)
})

export default withStyles(styles)(DraggableColorBox)

