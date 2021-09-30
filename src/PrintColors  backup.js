import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./styles/printPalette"

class PrintColors extends PureComponent {
	render() {
		const {colors, classes} = this.props;
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
				<table className={classes.table} key={level}>
					<thead>
						<tr>
							<th>Level: {level}</th>
						</tr>
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
			)
		})
		return (
			<div style={{margin: "1rem" }}>
				{colorsByLevel}
			</div>
		)
	}
}


export default withStyles(styles)(PrintColors)
