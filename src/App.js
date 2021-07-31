import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={ () => <h1>Pallete list goes here</h1> } />
        <Route exact path='/palette/:id' render={ () => <h1>Individual palette goes here</h1>} />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedPalettes[4])}/>
      // </div>
    );
  }
}

export default App;
