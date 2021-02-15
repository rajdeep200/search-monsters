import React from 'react'
import "./Card.css"

function Card( props ) {
    return (
        <div className="card-container">
            <img alt="Card-Image" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h1>{props.monster.name}</h1>
        </div>
    )
}

export default Card
