

import WearsImg from "./images"
import './image.css'

export default function WearsInfo({allCards}){

    return (
        <div className="wearInfo">

            {allCards.map( (card) => {
               return < WearsImg key={card.id} cards={card} />
            })}

        </div>
    )

}