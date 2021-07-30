import React, { Component } from 'react'
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedPalettes[4])}/>
      </div>
    );
  }
}

export default App;
