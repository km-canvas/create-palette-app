import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from "react-copy-to-clipboard";
import "./ColorBox.css";

export class ColorBox extends Component {
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
		const { background, name, colorId, paletteId, showLink } = this.props;
		const { copied } = this.state;
		return (
			<div style={{background: background}} className="ColorBox">
					<div style={{background}} className={`copy-overlay ${copied && "show"}`}></div>
					<div className={`copy-message ${copied && "show"}`}>
						<h1>copied!</h1>
						<p>{background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className="ColorBox-name">{name}</span>
						</div>
					<CopyToClipboard text={background} onCopy={this.changeCopyState}>
							<button className="copy-button">Copy</button>
					</CopyToClipboard>
					</div>
					{showLink && (
						<Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
							<span className="see-more">More</span>
						</Link>
					)}
				</div>	
		)
	}
}

export default ColorBox;
