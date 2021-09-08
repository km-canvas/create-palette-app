import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import { arrayMoveImmutable } from 'array-move';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
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
      allColors: this.props.allPalettes[0].colors,
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.saveCustomPalette = this.saveCustomPalette.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
	}

  handleDrawerOpen() {
    this.setState({ open: true });
  };
  handleDrawerClose() {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({ allColors: [...this.state.allColors, newColor] })
  }
  handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  saveCustomPalette(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"), 
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
    const { classes, maxColors, allPalettes } = this.props;
    const { open, allColors } = this.state;
    const paletteIsFull = allColors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open} 
          palettes={allPalettes} 
          handleSubmit={this.saveCustomPalette} 
          handleDrawerOpen={this.handleDrawerOpen}
        />
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
          <ColorPickerForm
            colors={allColors}
            addColor={this.addNewColor}
            paletteIsFull={paletteIsFull}
          />
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