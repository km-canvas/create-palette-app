import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import { arrayMoveImmutable } from 'array-move';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }
	constructor(props) {
		super(props)
		this.state = {
			open: true,
      currentColor: "#00ddc6",
      allColors: this.props.allPalettes[0].colors,
      newColorName: "",
      newPaletteName: ""
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.saveCustomPalette = this.saveCustomPalette.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
	}
  componentDidMount() {
    // custom rule for text validator
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.state.allColors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorValueUnique', value => 
      this.state.allColors.every(
        ({ color }) => color !== this.state.currentColor
      )
    );
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
      this.props.allPalettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
}
  handleDrawerOpen() {
    this.setState({ open: true });
  };
  handleDrawerClose() {
    this.setState({ open: false });
  };
  handleColorChange(newColor) {
    this.setState({ currentColor: newColor.hex })
  }
  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
    this.setState({ allColors: [...this.state.allColors, newColor], newColorName: "" })
  }
  handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  saveCustomPalette() {
    let newName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"), 
      colors: this.state.allColors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  removeColor(colorName) {
    this.setState({ 
      allColors: this.state.allColors.filter( color => color.name !== colorName )
    })
  }
  onSortEnd({oldIndex, newIndex}) {
    this.setState(({allColors}) => ({
      allColors: arrayMoveImmutable(allColors, oldIndex, newIndex),
    }));
  };
  clearPalette() {
    this.setState({ allColors: [] })
  }
  addRandomColor() {
    const everyPaletteColor = this.props.allPalettes.map( palette => palette.colors).flat();
    const excludeCurrentColors = everyPaletteColor.filter(color => !this.state.allColors.includes(color));
    let randomIdx = Math.floor(Math.random() * excludeCurrentColors.length);
    const randomColor = excludeCurrentColors[randomIdx];
    this.setState({ allColors: [...this.state.allColors, randomColor] })
  }

  render() {
    const { classes, maxColors } = this.props;
    const { open, currentColor, allColors, newColorName, newPaletteName } = this.state;
    const paletteIsFull = allColors.length >= maxColors;

    return (
      <div className={classes.root}>
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
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.saveCustomPalette}>
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
            </ValidatorForm>

          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
					<Typography variant="h4">
						Design Your Palette
					</Typography>
          <div>
  					<Button 
              variant="contained" 
              color="secondary"
              onClick={this.clearPalette}
            >
              Clear Palette
            </Button>
	  				<Button 
              variant="contained" 
              color="primary"
              onClick={this.addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
					<ChromePicker color={currentColor} onChangeComplete={this.handleColorChange} />
          <ValidatorForm onSubmit={this.addNewColor} instantValidate={false}>
            <TextValidator
              name="newColorName"
              value={newColorName}
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
              style={{backgroundColor: paletteIsFull ? "gray" : currentColor}} 
              variant="contained" 
              color="primary"
              type="submit"
              disabled={paletteIsFull}
              >
              {paletteIsFull ? "Palette Is Full" : "Add Color to Palette"}          
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList 
            colors={allColors} 
            removeColor={this.removeColor} 
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
