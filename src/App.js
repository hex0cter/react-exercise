import React, { Component } from 'react';
import './App.css';
import CurrentValue from './components/CurrentValue/CurrentValue'
import Buttons from './components/Buttons/Buttons'
import History from './components/History/History'
import SaveButton from './components/SaveButton/SaveButton'

class App extends Component {
  state = {
    value: 0
  }

  render() {
    return (
      <div className="App">
        <CurrentValue />
        <Buttons />
        <SaveButton />
        <History />
      </div>
    );
  }
}

export default App;