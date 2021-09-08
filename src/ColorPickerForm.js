import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import AddToPhotos from '@material-ui/icons/AddToPhotos';

const styles = {
	chromePicker: {
		minWidth: "100% !important",
		margin: "2rem 0 1rem"
	},
	addColorBtn: {
		width: "100%",
		padding: "0.5rem",
		marginTop: "1rem",
		fontSize: "1.5rem"
	},
	colorNameInput: {
		width: "100%",
		height: "70px"
	}
}

export class ColorPickerForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      currentColor: "#00ddc6",
      newColorName: "",
		}
    this.handleColorChange = this.handleColorChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorValueUnique', value => 
      this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      )
    );
  }
	handleColorChange(newColor) {
    this.setState({ currentColor: newColor.hex })
  }
	handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
	handleSubmit() {
		const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
		this.props.addColor(newColor);
		this.setState({ newColorName: "" }) 
	}
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker 
					color={currentColor} 
					onChangeComplete={this.handleColorChange} 
					className={classes.chromePicker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
					<TextValidator
						className={classes.colorNameInput}
						name="newColorName"
						value={newColorName}
						variant="filled"
						placeholder="New Color Name"
						onChange={this.handleNameChange}
						validators={[
							'required', 
							'isColorNameUnique',
							'isColorValueUnique'
						]}
						errorMessages={[
							'This field is required', 
							'This name already exists, color name must be unique',
							'Color already exists, select a new color'
						]}
					/>
					<Button
						className={classes.addColorBtn}
						startIcon={<AddToPhotos />} 
						style={{backgroundColor: paletteIsFull ? "gray" : currentColor}} 
						variant="contained" 
						color="primary"
						type="submit"
						disabled={paletteIsFull}
						>
						{paletteIsFull ? "Palette Is Full" : "Add Color"}          
					</Button>
				</ValidatorForm>
			</div>
		)
	}
}

export default withStyles(styles)(ColorPickerForm)
