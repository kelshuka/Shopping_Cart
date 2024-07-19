

import WearsImg from "./images"
import './image.css'

export default function WearsInfo({allCards, onCardClick}){

    return (
        <div className="wearInfo">

            {allCards.map( (card) => {
               return < WearsImg key={card.id} cards={card} onClicks={() => onCardClick(card)} />
            })}

        </div>
    )

}