
import { IconShoppingCart } from '@tabler/icons-react';
import './image.css'

export default function WearsImg({cards, onClicks}){


    return (
        <div className="wearsImg">
            <img src={cards.url} alt={cards.title} className="wear-img" />
            <p>{cards.title}</p>
            <div className='priceCart'>
                ${cards.price}
                <button onClick={onClicks}> 
                <IconShoppingCart /> 
                </button>
            </div>
        </div>
    );
}