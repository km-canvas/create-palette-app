import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DialogStyles from "./styles/dialogStyles";
import CustomMUIStyles from "./styles/overrideMUIStyles";

class PaletteMiniSelectForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			scroll: 'paper',
		}
	}
		handleOpen() {
			this.setState({ open: true });
		};
	
		handleClose() {
			this.setState({ open: false });
		};

	render() {
		const { hideForm } = this.props;
		const { open } = this.state;
    return (
			<div>
				<DialogStyles />
				<CustomMUIStyles />
				<Dialog
					fullWidth={true}
					maxWidth={'sm'}
					open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
				>
					<DialogTitle id="scroll-dialog-title">Choose from existing palettes</DialogTitle>
					<Divider />
						<DialogContent>

						</DialogContent>
						<DialogActions>
							<Button variant="contained" color="primary" onClick={this.handleClose}>
								Go
							</Button>
						</DialogActions>
				</Dialog>
			</div>
    );
  }
}

export default PaletteMiniSelectForm;