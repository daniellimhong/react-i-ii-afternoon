import React, { Component } from 'react'
import Data from "./Data"

export default class Display extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: "", //reminder to change value into a Number later
        name: { first: "", last: "" },
        city: "",
        country: "",
        employer: "",
        title: "",
        favoriteMovies: []
        }
    }

    
    
    render(){
        return(
            <div className="Display-container">{this.state}
            </div>
            
            
           
        )
    }
}

// buttons for next and previous (needs a < before it) 