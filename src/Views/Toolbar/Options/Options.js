import React, { Component } from "react"
import './Options.css'

import chevron from './assets/chevron-arrow-down.svg'

class Menu extends Component {
  render () {
    return (
      <div className={"lotus-menu " + this.props.open}>
        <span className="menu-arrow-up"></span>
        {/* <ul>
          <li>Events</li>
        </ul> */}
      </div>
    )
  }
}

class Options extends Component {
  constructor() {
    super()
    this.state = {
      open: "closed"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {open} = this.state

    if (/open/i.test(open)) {
      this.setState({open: "closed"})
    } else {
      this.setState({open: "open"})

    }
  }

  render () { 
    return (
      <div id="lotus-options" onClick={this.handleClick}>
        <div className={"options-title " + this.state.open}>Mode
          <img className={"options-chevron " + this.state.open} src={chevron} />
        </div>
        <div className={"options-subtitle " + this.state.open}>fighters</div>
        <Menu open={this.state.open} />
      </div>
    )
  }
}

export default Options