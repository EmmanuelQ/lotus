import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Map from '../Map/Map'
import './App.css'



class App extends Component {

  render() {
    return (
      <div className="lotus-app">
        <Toolbar />
        <div className="lotus-container">
        <Map />
        </div>
      </div>
    )
  }
}

export default App;
