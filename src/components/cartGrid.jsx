
import { useState } from "react";
import './image.css'

export default function CartsImg({cards, itemCount, setItemCount ,totalPrice, setTotalPrice }){


    const [itemQuantity, setItemQuantity] = useState(1);

    const addItem = () => {
        if(itemQuantity >= 0){
            setItemCount(itemCount + 1);
            setItemQuantity(itemQuantity + 1);

            setTotalPrice(totalPrice + cards.price);
        } else{
            setItemQuantity(0);
        }
        
    }

    const subItem = () => {
        if(itemQuantity > 0) {
            setItemCount(itemCount - 1);
            setItemQuantity(itemQuantity - 1);
    
            setTotalPrice(totalPrice - cards.price);
        } else{
            setItemQuantity(0);
        }    
    }


    return (
        <>

            <div className="cartImg">
                <div>
                    <img src={cards.url} alt={cards.title} className="cart-img" />
                </div>

                <div>
                    <p>{cards.title}</p>
                    <p>${cards.price}</p>
                    <p>Quantity: {itemQuantity}</p>
                    <div>
                        <button onClick={subItem}> - </button>
                        <button onClick={addItem}> + </button>
                    </div>
                </div>
        
            </div>
        </>
    );
}

