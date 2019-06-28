import React, { Component }from 'react'
import "./Card.css"

export default class Card extends Component{
    constructor(){
        super()

        this.state = {

        }
    }


    render(){
        let {id, city, title, employer, favoriteMovies} = this.props.parentData;
        let {first, last} = this.props.parentData.name;
        let mappedMovies = favoriteMovies.map(movie => {
            return (
            <li>{movie}</li>)
            })

        return(
            // console.log(this.props)
            <div className = "Card-parent">

            <div className="Id">{id}/25</div>
            <div className="Full">{first} {last}</div>
            <ul className="Info">
                <li><b>From:</b> {city} </li>
                <li><b>Job Title:</b> {title} </li>
                <li><b>Employer:</b> {employer} </li>
            </ul>

            <ol className="Moves">
                <p><b>Favorite Movies:</b></p>
                <p>{mappedMovies}</p>
            </ol>
            
            </div>
        )
    }
}