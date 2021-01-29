import React from 'react'
import "./Card.style.css"
const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4`} />
            <h2 key={props.monster.id}>Name:{props.monster.name}</h2>
            <p>Email:{props.monster.email}</p>
        </div>
    )
}

export default Card
