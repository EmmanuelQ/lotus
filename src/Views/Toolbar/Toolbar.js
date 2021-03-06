import React, { Component } from "react"
import './Toolbar.css'
import Filter from "./Filter/Filter"
import Options from "./Options/Options"

import {worldwide, contract, fighting_img} from "./Filter/assets/index"


class Toolbar extends Component {
    render () { 
        return (
            <div id="lotus-toolbar">
                <Options />
                <span className="lotus-options">
                    <Filter 
                        icon={fighting_img} 
                        subtitle="martial art"
                        filterOptions={["Judo", "Wrestling", "Boxing"]} />
                    <Filter 
                        icon={worldwide} 
                        subtitle="region"
                        filterOptions={["Europe", "Americas", "Africa"]} />
                    <Filter 
                        icon={contract} 
                        subtitle="organization"
                        filterOptions={["UFC", "One", "Bellator", "BAMMA"]}/>
                </span>
            </div>
        )
    }
}

export default Toolbar