
import './image.css'

export default function CartsImg({cards,addItem, subItem}){
    return (
        <>

            <div className="cartImg">
                <div>
                    <img src={cards.url} alt={cards.title} className="cart-img" />
                </div>

                <div>
                    <p>{cards.title}</p>
                    <p>${cards.price}</p>
                    <div>
                        <button onClick={subItem}> - </button>
                        <button onClick={addItem}> + </button>
                    </div>
                    <p>Price: $ </p>
                </div>
        
            </div>
        </>
    );
}

