
import CartsImg from "./components/cartGrid"

export default function Carts({allCards,itemCount, addItem, subItem}){

    return (
        <>
            <p> {itemCount} </p>
            <div className="cardInfo">

                {allCards.map( (card) => {
                    return < CartsImg key={card.id} 
                    cards={card} addItem={addItem} subItem={subItem} />
                })}

            </div>
        </>
    )
    
}