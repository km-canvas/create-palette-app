import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class PaletteFormNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newPaletteName: "",
		}
		this.handleNameChange = this.handleNameChange.bind(this);
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

	render() {
		const { classes, open, handleSubmit } = this.props;
		const { newPaletteName } = this.state;
		return (
			<div>
				<CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={ () => handleSubmit(newPaletteName)}>
              <TextValidator 
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
              <Button variant="contained" color="primary" type="submit">
                  Save Palette
              </Button>
              <Link to="/">
               <Button variant="contained" color="secondary">Go Back</Button>
              </Link>
            </ValidatorForm>

          </Toolbar>
        </AppBar>
			</div>
		)
	}
}

export default PaletteFormNav
