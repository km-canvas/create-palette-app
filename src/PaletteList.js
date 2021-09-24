import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import UndoIcon from '@material-ui/icons/Undo'
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";
import DialogStyles from "./styles/dialogStyles";

class PaletteList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 openDeleteDialog: false,
			 deletePaletteId: "",
			 deletePaletteColors: []
		}
		this.openDialog = this.openDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.goToPalette = this.goToPalette.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	openDialog(id){
		this.setState({ 
			openDeleteDialog: true, 
			deletePaletteId: id,
		})
	}
	closeDialog() {
		this.setState({ openDeleteDialog: false, deletePaletteId: ""})
	}
	goToPalette(id){
		this.props.history.push(`/palette/${id}`)
	}
	handleDelete() {
		this.props.deletePalette(this.state.deletePaletteId);
		this.closeDialog();
	}

	render() {
		const { palettes, classes } = this.props;
		const { openDeleteDialog, deletePaletteId } = this.state;
		return (
			<div className={classes.root}>
				<DialogStyles />
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.heading}>React Colors</h1>
						<Link to="/palette/new">Create Custom Palette</Link>
						<button to="/" onClick={() => {window.localStorage.clear(); window.location.reload()}}>Restore Palettes</button>
					</nav>
					<TransitionGroup className={classes.palettes}>
					{palettes.map(palette => (
						<CSSTransition
							key={palette.id}
							timeout={500}
							classNames="fade"
						>
							<MiniPalette 
								{...palette} 
								key={palette.id}
								id={palette.id}
								colors={palette.colors} 
								goToPalette={this.goToPalette} 
								openDialog={this.openDialog}
							/>
						</CSSTransition>
					))}
					</TransitionGroup>
				</div>
				<Dialog 
					open={openDeleteDialog} 
					aria-labelledby="delete-dialog-title"
					onClose={this.closeDialog}
				>
        <DialogTitle id="delete-dialog-title">
					Delete Palette?
				</DialogTitle>
				<Divider />
				<DialogContent>
					<DialogContentText id="delete-dialog-description">
						Are you absolutely sure you want to delete this palette?
					</DialogContentText>
					{palettes.filter(palette => palette.id === deletePaletteId).map(filteredPalette => (
						<MiniPalette 
							{...filteredPalette} 
							key={filteredPalette.id}
						/>
					))}
				</DialogContent>
        <div>
          <List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[50], color: red[600] }}>
									<DeleteForeverIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Yes, I can't look at it anymore. Delete it!" />
						</ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: teal[50], color: teal['A700'] }}>
                  <UndoIcon />
                </Avatar>
              </ListItemAvatar>
							<ListItemText primary="Actually, I want to keep this one...for now." />
            </ListItem>
          </List>
        </div>
      </Dialog>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList);
