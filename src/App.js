import React, { Component } from 'react';
import './App.css';
import CurrentValue from './components/CurrentValue/CurrentValue'
import Buttons from './components/Buttons/Buttons'

class App extends Component {
  state = {
    value: 0
  }

  render() {
    return (
      <div className="App">
        <CurrentValue />
        <Buttons />

      </div>
    );
  }
}

export default App;