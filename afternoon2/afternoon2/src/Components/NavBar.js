import React, { Component } from "react"

export default class NavBar extends Component{
    constructor(){
        super()

        this.state = {

        }
    }



    render(){
        console.log(this.props)
        return(
            <div>
            <button onClick={ () => this.props.handlePreviousFn() }>Previous</button>
            <button onClick={ () => this.props.handleNextFn() }>Next</button>
            </div>
        )
    }
}
