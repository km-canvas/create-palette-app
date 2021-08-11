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
		const { background, name } = this.props;
		const { copied } = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
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
							<button className="copy-button">Copy</button>
					</div>
					<Link to="/" onClick={e => e.stopPropagation()}>
						<span className="see-more">More</span>
					</Link>
				</div>	
			</CopyToClipboard>
		)
	}
}

export default ColorBox;
