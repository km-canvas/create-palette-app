import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ReactToPrint from "react-to-print";
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import PrintColors from './PrintColors';
import CustomMUIStyles from './styles/overrideMUIStyles';
import TooltipStyles from './styles/tooltipStyles';
import styles from './styles/PrintPaletteStyles'

class PrintPalette extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<CustomMUIStyles />
				<TooltipStyles />
				<ReactToPrint
          trigger={() => (
						<Tooltip 
							TransitionComponent={Fade} 
							TransitionProps={{ timeout: 600 }} 
							title="Print all color values and levels to a PDF."
							placement="bottom-end"
						>
						<Button 
              className={classes.navBtn} 
              variant="contained" 
              color="primary"
            >
              <PrintIcon/><span className={classes.navBtnTxt}>Print to PDF</span>
            </Button>
						</Tooltip>
					)}
					pageStyle="@page {size: 8.5in 11in}"
          content={() => this.componentRef}
        />
				<div style={{display: "none"}}>
      	  <PrintColors 
						ref={(el) => (this.componentRef = el)} 
						paletteName={this.props.paletteName}
						colors={this.props.colors} 
						level={this.props.level}
					/>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PrintPalette)
