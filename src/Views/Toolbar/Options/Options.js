import React, { Component } from "react"
import './Options.css'
import Menu from '../Menu/Menu'
import chevron from './assets/chevron-arrow-down.svg'

class Options extends Component {
  constructor() {
    super()
    this.state = {
      open: "closed",
      selectedOption: "fighter"
    }
    this.handleClick = this.handleClick.bind(this)
    this.optionClickHandler = this.optionClickHandler.bind(this)
  }

  handleClick () {
    const {open} = this.state

    if (/open/i.test(open)) {
      this.setState({open: "closed"})
    } else {
      this.setState({open: "open"})

    }
  }

  optionClickHandler (option) {
    this.setState({selectedOption: option})
  }

  render () {
    const {handleClick, optionClickHandler, state} = this

    return (
      <div id="lotus-options" onClick={handleClick}>
        <div className={"options-title " + state.open}>Mode
          <img className={"options-chevron " + state.open} src={chevron} />
        </div>
        <div className={"options-subtitle " + state.open}>{state.selectedOption}</div>
        <Menu 
          open={state.open}
          menuOptions={["Events", "Fighting", "News"]} 
          optionClickHandler={optionClickHandler}/>
      </div>
    )
  }
}

export default Options