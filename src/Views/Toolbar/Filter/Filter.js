import React, { Component } from "react"
import Menu from "../Menu/Menu"
import './Filter.css';

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      open: "closed",
      selectedOption: "fighter"
    }
    this.optionClickHandler = this.optionClickHandler.bind(this)
    this.mouseHandler = this.mouseHandler.bind(this)
  }

  optionClickHandler (option) {
    this.setState({selectedOption: option})
  }

  mouseHandler () {
    if (/open/i.test(this.state.open)) {
      this.setState({open:"closed"})
    } else {
      this.setState({open:"open"}) 
    }
  }

  render () {
    const {props, optionClickHandler, mouseHandler, state} = this
    return (
      <div 
        className="lotus-filter" 
        onClick={mouseHandler} 
        onMouseOver={mouseHandler} 
        onMouseOut={mouseHandler}>
          <img className="filter-img" src={props.icon} />
          <div className="filter-subtitle">{props.subtitle}</div>
          <Menu 
            open={state.open}
            menuOptions={this.props.filterOptions} 
            optionClickHandler={optionClickHandler}/>
      </div>
    )
  }
}

export default Filter