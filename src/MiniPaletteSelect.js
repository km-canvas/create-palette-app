import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStarterStyles';

class MiniPaletteSelect extends PureComponent {
	render() {
	const {classes, colors } = this.props;
	const miniColorBoxes = colors.map(color => (
		<div 
			className={classes.miniColor}
			style={{backgroundColor: color.color}}
			key={color.name}>
		</div>
	))
 	return (
		<div className={classes.root} onClick={this.handleClick}>
			<div className={classes.colors}>
				{miniColorBoxes}
			</div>
		</div>
		)	;
	}
}

export default withStyles(styles)(MiniPaletteSelect);