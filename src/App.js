import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedPalettes from "./seedPalettes";
import { generatePalette } from './colorHelpers';

class App extends Component {
constructor(props) {
  super(props);
  const savedPalettes = JSON.parse(window.localStorage.getItem("allPalettes"))
  this.state = { allPalettes: savedPalettes || seedPalettes};
  this.findPalette = this.findPalette.bind(this)
  this.savePalette = this.savePalette.bind(this)
  this.deletePalette = this.deletePalette.bind(this)
}

  findPalette(id) {
    return this.state.allPalettes.find(function(palette) {
      return palette.id === id;
    })
  }
  savePalette(newPalette) {
    this.setState(
      { allPalettes: [...this.state.allPalettes, newPalette] },
      this.syncLocalStorage
      )
  }
  syncLocalStorage() {
    window.localStorage.setItem("allPalettes", JSON.stringify(this.state.allPalettes))
  }
  deletePalette(id) {
    this.setState( oldState => (
      {allPalettes: oldState.allPalettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorage  
    )
  }
  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition 
            key={location.key}
            classNames="page" 
            timeout={500}
            >
            <Switch location={location}>
              <Route 
                exact 
                path="/palette/new" 
                render={(routeProps) => (
                  <Page>
                    <NewPaletteForm 
                      {...routeProps}
                      allPalettes={this.state.allPalettes}
                      savePalette={this.savePalette} 
                    />
                  </Page>  
                )} 
              />
              <Route 
                exact 
                path="/palette/:paletteId/:colorId" 
                render={(routeProps) => (
                  <Page>
                    <SingleColorPalette 
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </Page> 
                )} 
              />  
              <Route 
                exact 
                path='/palette/:id' 
                render={(routeProps) => (
                  <Page>
                    <Palette 
                    palette={generatePalette(
                        this.findPalette(routeProps.match.params.id)
                        )}
                    />
                  </Page> 
                )} 
              />
              <Route 
                exact 
                path='/' 
                render={ (routeProps) => (
                  <Page>
                    <PaletteList 
                      palettes={this.state.allPalettes} 
                      deletePalette={this.deletePalette}
                      {...routeProps} 
                    />
                  </Page>
                )} 
              />
              <Route 
                render={ (routeProps) => (
                  <Page>
                    <PaletteList 
                      palettes={this.state.allPalettes} 
                      deletePalette={this.deletePalette}
                      {...routeProps} 
                    />
                  </Page>
                )} 
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} 
      />
    );
  }
}

export default App;
