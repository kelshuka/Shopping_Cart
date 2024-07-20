

import { useEffect} from "react"
import CartsImg from "./cartGrid"

export default function Carts({allCards,itemCount,setItemCount , totalPrice , setTotalPrice  }){

    useEffect( () => {
        let totaPrice = 0;
        allCards.forEach( (item) => {
            totaPrice += item.price;
        });
        setTotalPrice(totaPrice);
    }, [allCards] )

    return (
        <>
            <p> {itemCount} </p>
            <p>$ {totalPrice.toFixed(2)}</p>
            <div className="cardInfo">

                {allCards.map( (card) => {
                    return < CartsImg key={card.id} cards={card} 
                    itemCount={itemCount} setItemCount={setItemCount} totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}  />
                })}

            </div>
        </>
    )
    
}