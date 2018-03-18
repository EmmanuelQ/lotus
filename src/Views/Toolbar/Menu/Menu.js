import React, { Component } from "react"
import './Menu.css'

class Menu extends Component {
  render () {
    const listComponents = this.props.menuOptions.map(item => {
      return (
        <li 
          className="menu-list-item"
          onClick={() => this.props.optionClickHandler(item)}>
          {item}
        </li>
      )
    })

    return (
      <div className={"lotus-menu " + this.props.open}>
        <span className="menu-arrow-up"></span>
        <ul className={this.props.open}>
          {listComponents}
        </ul>
      </div>
    )
  }
}

export default Menu