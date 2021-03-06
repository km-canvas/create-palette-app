import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import SaveIcon from '@material-ui/icons/Save';
import HomeIcon from '@material-ui/icons/Home';
import PaletteMetaForm from './PaletteMetaForm';
import TooltipStyles from './styles/tooltipStyles';
import CustomMUIStyles from './styles/overrideMUIStyles'
import styles from './styles/PaletteFormNavStyles';

export class PaletteFormNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
       formShowing: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.showForm = this.showForm.bind(this)
    this.hideForm = this.hideForm.bind(this)
  }
  handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  showForm() {
    this.setState({ formShowing: true })
  }
  hideForm() {
    this.setState({ formShowing: false })
  }
	render() {
		const { classes, openDrawer, palettes, handleSubmit, hexShowing, handleDrawerOpen, hideHex, showHex } = this.props;
    const { formShowing } = this.state;
		return (
			<div className={classes.root}>
				<CssBaseline />
        <TooltipStyles />
        <CustomMUIStyles />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {[classes.appBarShift]: openDrawer })}
        >
          <Toolbar disableGutters={!openDrawer}>
            <Tooltip 
                TransitionComponent={Fade} 
                TransitionProps={{ timeout: 600 }} 
                title="Click to open palette editor."
                placement="bottom-start"
              >
              <IconButton
                color="inherit"
                aria-label="Open Palette Editor"
                onClick={handleDrawerOpen}
                className={classNames(classes.menuButton, {[classes.hide]: openDrawer})}
              >
                <LibraryAddIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>
            <Tooltip 
							TransitionComponent={Fade} 
							TransitionProps={{ timeout: 600 }} 
							title="Click to show or hide color values."
							placement="bottom-end"
						>
              <IconButton
                aria-label="View Color Value"
                className={classes.viewHexBtn}
                onClick={hexShowing ? hideHex : showHex}
              >
              { hexShowing 
                ? <VisibilityOutlinedIcon /> 
                : <VisibilityOffOutlinedIcon />
                }
              </IconButton>
            </Tooltip>
          </Toolbar>
          <div className={classes.navBtnGroup}>
            <Link to="/">
              <Button className={classes.navBtn} variant="contained">
                <HomeIcon />
                <span className={classes.navBtnTxt}>Go Back</span>
                </Button>
            </Link>
            <Button 
              className={classes.navBtn} 
              variant="contained" 
              color="primary"
              onClick={this.showForm}
            >
              < SaveIcon/><span className={classes.navBtnTxt}>Save Palette</span>
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
        )}
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);