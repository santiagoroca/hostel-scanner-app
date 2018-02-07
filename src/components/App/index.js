import React, { Component } from 'react';

import Container from '../Container'
import Menu from '../Menu'

import './Style.css'

class App extends Component {
  render () {
    return (
      <div className="app">
        <Container/>
        <Menu/>
      </div>
    );
  }
}

export default App
