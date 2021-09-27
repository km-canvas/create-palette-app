import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import MiniPaletteSelect from './MiniPaletteSelect';
import bgPrismGradient from './styles/navbg.svg'
import DialogStyles from "./styles/dialogStyles";
import styles from "./styles/NewPaletteStarterStyles";

const DialogPaper = withStyles({
	"@global": {
		".MuiTypography-h6": {
			fontSize: "2rem"
		},
		".MuiDialogContent-root": {
			backgroundColor: "#EEE",
			backgroundImage: `url(${bgPrismGradient})`,
			// background by SVGBackgrounds.com
			backgroundAttachment: "fixed",
			backgroundSize: "cover"
		},
	}
})(() => null);

export class NewPaletteStarterDialog extends Component {
	render() {
		const { classes, palettes, handleStarterPalette, handleBlankPalette } = this.props;
		return (
			<div className={classes.root}>
				<DialogStyles />
				<DialogPaper />
				<div className={classes.MiniPaletteCardCtn}>
					<Card 
						className={classes.card} 
						key="blank"
						id="blank"
						action={<CardActionArea />}
					>
						<CardActionArea style={{height: "100%"}} onClick={() => handleBlankPalette()}>
							<CardContent>
								<Typography component="p" align="center">
									Blank Palette
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					{palettes.map(palette => (
					<Card 
						className={classes.card} 
						key={palette.id}
						id={palette.id}
						action={<CardActionArea />}
						>
						<CardActionArea onClick={() => handleStarterPalette(palette.id)}>
						<CardContent>
							<MiniPaletteSelect 
								id={palette.id}
								colors={palette.colors}
							/>
							<Typography component="p" style={{marginTop: "0.5rem"}}>
								{palette.paletteName} Palette
							</Typography>
						</CardContent>
						</CardActionArea>
					</Card>
					))}
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(NewPaletteStarterDialog)
