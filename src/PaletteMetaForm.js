import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class PaletteMetaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: true,
			newPaletteName: "",

		}
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handleClickOpen = this.handleClickOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}
	componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
	handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
	handleClickOpen() {
    this.setState({ open: true });
  };
  handleClose() {
    this.setState({ open: false });
  };

	render() {
		const { handleSubmit } = this.props;
		const { newPaletteName } = this.state;

    return (
			<Dialog
				open={this.state.open}
				onClose={this.handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
					<DialogContent>
						<DialogContentText>
							Enter a name for your palette. Name must be unique.
						</DialogContentText>
							<TextValidator 
								fullWidth
								margin="normal"
								name="newPaletteName"
								label="Palette Name"
								value={newPaletteName} 
								onChange={this.handleNameChange}
								validators={[
								'required', 
								'isPaletteNameUnique',
								]}
							errorMessages={[
								'This field is required', 
								'This palette name already exists, name must be unique',
								]}
							/>
					</DialogContent>
					<DialogActions>
						<Button variant="outlined" onClick={this.handleClose} color="primary">
							On Second Thought...
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
    );
  }
}

export default PaletteMetaForm
