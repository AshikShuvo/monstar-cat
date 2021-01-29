import React from 'react'
import Card from '../card/Card.component'
import "./CardList.style.css"

const CardList = props => {
    return (
        <div key="cardList" className="card-list">
           {
               props.monsters.map((item,index)=><Card key={`card${index}`} monster={item}/>)
           }
        </div>
    )
}
export default CardList
