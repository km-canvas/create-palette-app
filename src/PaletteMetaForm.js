import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import DialogStyles from "./styles/dialogStyles";
import CustomMUIStyles from "./styles/overrideMUIStyles";

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formStage: "nameForm",
			newPaletteName: "",
			newPaletteEmoji: "",
		}
		this.handleNameChange = this.handleNameChange.bind(this)
		this.showEmojiForm = this.showEmojiForm.bind(this)
		this.showNameForm = this.showNameForm.bind(this)
		this.saveEmoji = this.saveEmoji.bind(this)
		this.savePalette = this.savePalette.bind(this)
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
	showEmojiForm() {
		this.setState({ formStage: "emojiForm" })
	}
	showNameForm() {
		this.setState({ formStage: "nameForm", newPaletteEmoji: "" })
	}
	saveEmoji(emoji) {
		this.setState({ newPaletteEmoji: emoji.native})
	}
	savePalette() {
		const newPalette = {
			paletteName: this.state.newPaletteName, 
			emoji: this.state.newPaletteEmoji
		}
		this.props.handleSubmit(newPalette);
		this.setState({ formStage: "" })
	}

	render() {
		const { hideForm } = this.props;
		const { newPaletteName, newPaletteEmoji, formStage } = this.state;
    return (
			<div>
				<DialogStyles />
				<CustomMUIStyles />
				<Dialog
					fullWidth={true}
					maxWidth={'sm'}
					open={formStage === "emojiForm"}
					onClose={hideForm}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Choose an Emoji for <q>{newPaletteName}</q> Palette.</DialogTitle>
					<Divider />
					<ValidatorForm onSubmit={this.savePalette}>
						<DialogContent>
						<Picker 
							set="google"
							color="#3f51b5"
							onSelect={this.saveEmoji}
							title="Hover over emoji to preview"
							emoji=""
						/>
						<TextValidator
							fullWidth
							margin="normal"
							label="Selected Emoji"
							value={newPaletteEmoji} 
							validators={['required']}
							errorMessages={['This field is required']}
						/>
						<DialogContentText variant="caption">
							<em>Please note: Some browsers may display emojis differently.</em>
						</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button variant="outlined" color="primary" onClick={this.showNameForm} startIcon={<ChevronLeftIcon />} >
								Change Palette Name
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
				<Dialog
					fullWidth={true}
					maxWidth={'sm'}
					open={formStage === "nameForm"}
					onClose={hideForm}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<Divider />
					<ValidatorForm onSubmit={this.showEmojiForm}>
						<DialogContent>
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
							<Button variant="outlined" color="primary" onClick={hideForm}>
								On Second Thought...
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Next
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
    );
  }
}

export default PaletteMetaForm;
