import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    allPalettes: seedPalettes
  };
  this.findPalette = this.findPalette.bind(this)
  this.savePalette = this.savePalette.bind(this)
}

  findPalette(id) {
    return this.state.allPalettes.find(function(palette) {
      return palette.id === id;
    })
  }
  savePalette(newPalette) {
    this.setState({ allPalettes: [...this.state.allPalettes, newPalette] })
  }
  render() {
    return (
      <Switch>
        <Route 
          exact 
          path="/palette/new" 
          render={(routeProps) => 
            <NewPaletteForm 
              {...routeProps}
              allPalettes={this.state.allPalettes}
              savePalette={this.savePalette} 
            /> } 
        />
        <Route 
          exact 
          path="/palette/:paletteId/:colorId" 
          render={(routeProps) => (
            <SingleColorPalette 
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            /> 
          )} 
        />  
        <Route 
          exact 
          path='/palette/:id' 
          render={(routeProps) => (
            <Palette 
            palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
                )}
              /> 
            )} 
          />
        <Route 
          exact 
          path='/' 
          render={ (routeProps) => <PaletteList palettes={this.state.allPalettes} {...routeProps} /> } 
        />
      </Switch>
    );
  }
}

export default App;
