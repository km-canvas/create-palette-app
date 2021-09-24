import React, { PureComponent } from 'react'
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class MiniPalette extends PureComponent {
	constructor(props) {
		super(props)
		this.deletePalette = this.deletePalette.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	deletePalette(e) {
		e.stopPropagation();
		this.props.openDialog(this.props.id);
	}
	handleClick() {
		this.props.goToPalette(this.props.id)
	}
	render() {
	const {classes, paletteName, emoji, colors } = this.props;
	const miniColorBoxes = colors.map(color => (
		<div 
			className={classes.miniColor}
			style={{backgroundColor: color.color}}
			key={color.name}>
		</div>
	))
 	return (
		<div className={classes.root} onClick={this.handleClick}>
			<div className={classes.deleteCtn} onClick={this.deletePalette}>
				<DeleteForeverIcon className={classes.deleteIcon} />
			</div>
			<div className={classes.colors}>
				{miniColorBoxes}
			</div>
			<h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
		</div>
		)	;
	}
}

export default withStyles(styles)(MiniPalette);