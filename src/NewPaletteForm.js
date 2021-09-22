import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LayersClear from '@material-ui/icons/LayersClear';
import FindReplace from '@material-ui/icons/FindReplace';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import { arrayMoveImmutable } from 'array-move';


class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }
	constructor(props) {
		super(props)
		this.state = {
			open: true,
      allColors: this.props.allPalettes[0].colors,
      hexShowing: false,
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
    this.showColorHex = this.showColorHex.bind(this)
    this.hideColorHex = this.hideColorHex.bind(this)
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
  saveCustomPalette(newPaletteObj) {
    newPaletteObj.id = newPaletteObj.paletteName.toLowerCase().replace(/ /g, "-");
    newPaletteObj.colors = this.state.allColors;
    this.props.savePalette(newPaletteObj);
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
  showColorHex() {
    this.setState({ hexShowing: true })
  }
  hideColorHex() {
    this.setState({ hexShowing: false })
  }
  render() {
    const { classes, maxColors, allPalettes } = this.props;
    const { open, allColors, hexShowing } = this.state;
    const paletteIsFull = allColors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open} 
          palettes={allPalettes} 
          handleSubmit={this.saveCustomPalette} 
          handleDrawerOpen={this.handleDrawerOpen}
          showHex={this.showColorHex}
          hideHex={this.hideColorHex}
          hexShowing={hexShowing}
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
            <IconButton aria-label="Minimize Palette Editor" onClick={this.handleDrawerClose}>
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <Typography 
              variant="h4"
              gutterBottom
            >
              Design Your Palette
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.clearButton}
                startIcon={<LayersClear />}
                variant="contained" 
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.randomButton}
                startIcon={<FindReplace />}  
                variant="contained" 
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
          </div>
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
            hexShowing={hexShowing}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);