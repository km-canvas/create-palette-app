import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { SwatchesPicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import classNames from 'classnames';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import styles from './styles/ColorPickerFormStyles';

export class ColorPickerForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      currentColor: "#00ddc6",
      newColorName: "",
			switched: false
		}
    this.handleColorChange = this.handleColorChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.switchPicker = this.switchPicker.bind(this);
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
	switchPicker(evt) {
		this.setState({ [evt.target.value]: evt.target.checked })
	}

	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName, switched } = this.state;
		const colorPicker = (switched) ? (
				<SwatchesPicker 
					onChangeComplete={this.handleColorChange} 
					className={classes.swatchPicker}
					width="100%"
					height="300px"
				/>) : (	
				<ChromePicker color={currentColor} disableAlpha={true}
					onChangeComplete={this.handleColorChange} 
					className={classes.chromePicker}
				/>)
		return (
			<div>
				<div className={classes.switchPickerCtn}>
					<h4 className={classNames(classes.activeTxt, {[classes.nonActiveTxt]: switched })}>Color Picker</h4>
					<Switch 
						checked={switched} 
						onChange={this.switchPicker} 
						value="switched" 
						color="default" 
					/>
					<h4 className={classNames(classes.activeTxt, {[classes.nonActiveTxt]: !switched })}>Swatch Picker</h4>
				</div>
				<div className={classes.colorPickerCtn}>
					{colorPicker}
				</div>
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
						startIcon={<LibraryAddIcon />} 
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
