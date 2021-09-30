import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./styles/printColors"

class PrintColors extends PureComponent {
	render() {
		const {colors, classes, paletteName } = this.props;
		const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];
		const colorsByLevel = levels.map(level => {
			const colorlevels = colors[level].map(color => {
				return (					
					<tr key={color.id}>
						<td><div className={classes.preview} style={{backgroundColor: `${color.hex}`}}></div></td>
						<td>{color.name.toUpperCase()}</td>
						<td>{color.hex}</td>
						<td>{color.rgb}</td>
						<td>{color.rgba}</td>
					</tr>
				)
			})
			return (
				<div className={classes.level} key={level}>
					<div className={classes.title}>
						<h3>{paletteName} Palette</h3>
						<h4>Color Level: {level}</h4>
					</div>
					<table className={classes.table}>
						<thead>
							{/* <tr>
								<th>Level: {level}</th>
							</tr> */}
							<tr>
								<th>Preview</th>
								<th>Name</th>
								<th>HEX</th>
								<th>RGB</th>
								<th>RGBA</th>
							</tr>
						</thead>
						<tbody>
							{colorlevels}
						</tbody>
					</table>
				</div>
			)
		})
		return (
			<div>
				{colorsByLevel}
			</div>
		)
	}
}


export default withStyles(styles)(PrintColors)
