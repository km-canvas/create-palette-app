import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export class PaletteMetaForm extends Component {
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
		console.log(emoji)
		this.setState({ newPaletteEmoji: emoji.native})
	}
	savePalette() {
		const newPalette = {
			paletteName: this.state.newPaletteName, 
			emoji: this.state.newPaletteEmoji
		}
		this.props.handleSubmit(newPalette)
	}

	render() {
		const { hideForm } = this.props;
		const { newPaletteName, newPaletteEmoji, formStage } = this.state;

    return (
			<div>
				<Dialog 
					open={formStage === "emojiForm"}
					onClose={hideForm}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Choose an Emoji for this Palette.</DialogTitle>
					<ValidatorForm onSubmit={this.savePalette}>
						<Picker title="Pick a Palette Emoji" onSelect={this.saveEmoji} />
						<DialogContentText>
							Some browsers may display emojis differently. Your selected emoji will display like this:
							</DialogContentText>
							<TextValidator 
								fullWidth
								margin="normal"
								label="Palette Emoji"
								value={newPaletteEmoji} 
								validators={['required']}
								errorMessages={['This field is required']}
							/>
						<DialogActions>
							<Button variant="outlined" onClick={this.showNameForm} color="primary">
								Change Palette Name
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
				<Dialog
					open={formStage === "nameForm"}
					onClose={hideForm}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiForm}>
						<DialogContent>
							<DialogContentText>
								Enter a name for your palette.
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
							<Button variant="outlined" onClick={hideForm} color="primary">
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

export default PaletteMetaForm
