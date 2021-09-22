import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PaletteList extends Component {
	goToPalette(id){
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const { palettes, classes, deletePalette } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.heading}>React Colors</h1>
						<Link to="/palette/new">Create Custom Palette</Link>
						{/* <button to="/" onClick={() => {window.localStorage.clear(); window.location.reload()}}>Restore Palettes</button> */}
					</nav>
					<TransitionGroup className={classes.palettes}>
					{palettes.map(palette => (
						<CSSTransition
							key={palette.id}
							timeout={500}
							classNames="fade"
						>
							<MiniPalette 
								{...palette} 
								key={palette.id}
								id={palette.id} 
								handleClick={() => this.goToPalette(palette.id )} 
								handleDelete={deletePalette}
							/>
						</CSSTransition>
					))}
					</TransitionGroup>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList);
