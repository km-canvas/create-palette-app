import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import classNames from 'classnames';
import { withStyles } from '@material-ui/styles';
import styles from "./styles/ColorBoxStyles"

class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 copied: false
		};
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState() {
		this.setState({copied: true}, () => {
			setTimeout(() => this.setState({copied: false}), 1500);
		})
	}
	
	render() {
		const { background, name, colorId, paletteId, showingFullPalette, classes } = this.props;
		const { copied } = this.state;
		return (
			<div style={{background: background}} className={classes.ColorBox}>
					<div style={{background}} className={classNames(classes.copyOverlay, {[classes.showOverlay]: copied})}></div>
					<div className={classNames(classes.copyMessage, {[classes.showMessage]: copied})}>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
					<CopyToClipboard text={background} onCopy={this.changeCopyState}>
							<button className={classes.copyButton}>Copy</button>
					</CopyToClipboard>
					</div>
					{showingFullPalette && (
						<Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
							<span className={classes.seeMore}>
								MORE 
								<span>&raquo;</span>
							</span>
						</Link>
					)}
				</div>	
		)
	}
}

export default withStyles(styles)(ColorBox);
