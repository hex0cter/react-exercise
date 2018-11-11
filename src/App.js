import React, { Component } from 'react';
import './App.css';
import CurrentValue from './components/CurrentValue/CurrentValue'
import Buttons from './components/Buttons/Buttons'

class App extends Component {
  state = {
    value: 0
  }

  updateValueHandler = (action, step) => {
    switch (action) {
      case 'inc':
        this.setState(({ value }) => {
          return { value: value + 1 }
        })
        break
      case 'dec':
        this.setState(({ value }) => {
          return { value: value - 1 }
        })
        break
      case 'add':
        this.setState(({ value }) => {
          return { value: value + step }
        })
        break
      case 'sub':
        this.setState(({ value }) => {
          return { value: value - step }
        })
        break
      default:
        return
    }
  }

  render() {
    return (
      <div className="App">
        <CurrentValue />
        <Buttons clicked={this.updateValueHandler} />
      </div>
    );
  }
}

export default App;