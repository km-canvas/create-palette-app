import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LayersClear from '@material-ui/icons/LayersClear';
import FindReplace from '@material-ui/icons/FindReplace';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PaletteIcon from '@material-ui/icons/Palette';
import { arrayMoveImmutable } from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';
import NewPaletteStarterDialog from './NewPaletteStarterDialog';
import CustomMUIStyles from './styles/overrideMUIStyles'
import styles from './styles/NewPaletteFormStyles';


class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  }
	constructor(props) {
		super(props)
		this.state = {
			openDrawer: true,
      allColors: [],
      openDialog: true,
      hexShowing: false,
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleBlankPalette = this.handleBlankPalette.bind(this);
    this.handleStarterPalette = this.handleStarterPalette.bind(this);
    this.reopenDialog = this.reopenDialog.bind(this);
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
    this.setState({ openDrawer: true });
  };
  handleDrawerClose() {
    this.setState({ openDrawer: false });
  };
  handleBlankPalette() {
    this.setState({
      allColors: [],
      openDialog: false
    })
  }
  handleStarterPalette(id) {
    const starterPalette = this.props.allPalettes.filter(palette => palette.id === id).map(palette => palette.colors);
    this.setState({
      allColors: starterPalette[0],
      openDialog: false
    })
  }
  reopenDialog() {
    this.setState({ openDialog: true })
  }
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
    const availableColors = this.props.allPalettes.map(palette => palette.colors).flat();
    let currColors = this.state.allColors.map(color => color.name)
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      let randomIdx = Math.floor(Math.random() * availableColors.length);
      randomColor = availableColors[randomIdx];
      isDuplicateColor = currColors.includes(randomColor.name);
    }
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
    const { openDrawer, openDialog, allColors, hexShowing } = this.state;
    const paletteIsFull = allColors.length >= maxColors;
    const paletteIsEmpty = allColors.length === 0;
    return (
      <div className={classes.root}>
        <CustomMUIStyles />
        <PaletteFormNav 
          openDrawer={openDrawer} 
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
          open={openDrawer}
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
              align="center"
              gutterBottom
            >
              Design Your Palette
            </Typography>
            <Tooltip 
              TransitionComponent={Fade} 
              TransitionProps={{ timeout: 600 }} 
              title="Click to choose an existing palette to edit. Only available if canvas is empty."
              placement="bottom-start"
            >
             <Button
                className={classes.paletteButton}
                startIcon={<PaletteIcon />}
                variant="contained" 
                color="primary"
                onClick={this.reopenDialog}
                disabled={!paletteIsEmpty}
              >
                Choose a Starter Palette
              </Button>
            </Tooltip>
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
            [classes.contentShift]: openDrawer,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            openDrawer={openDrawer} 
            colors={allColors} 
            removeColor={this.removeColor} 
            axis="xy"
            onSortEnd={this.onSortEnd}
            hexShowing={hexShowing}
            distance={20}
          />
        </main>
        <Dialog
          open={openDialog}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          fullWidth={true}
          maxWidth="xl"
        >
          <DialogTitle id="scroll-dialog-title" align="center">Choose a Starter Palette</DialogTitle>
          <DialogContent>
            <NewPaletteStarterDialog
              handleBlankPalette={this.handleBlankPalette}
              handleStarterPalette={this.handleStarterPalette}
              palettes={allPalettes}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);