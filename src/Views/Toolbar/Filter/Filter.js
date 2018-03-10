import React, { Component } from "react"
import './Filter.css';

class Filter extends Component {
  render () {
      return (
          <div className="lotus-filter">
            <img className="filter-img" src={this.props.icon} />
            <div className="filter-subtitle">{this.props.subtitle}</div>
          </div>
      )
  }
}

export default Filter