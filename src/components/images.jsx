
export default function WearsImg({cards}){
    return (
        <div className="wearsImg">
            <img src={cards.url} alt={cards.title}  />
            <p>{cards.title}</p>
            <p>{cards.price}</p>
        </div>
    );
}