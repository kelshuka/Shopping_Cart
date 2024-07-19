import All from "./All";

export default function Men({allImage,setAllImage,clickedCards, setClickedCards,itemCount, setItemCount}){
    return (
        <>
            <All 
            allImage={allImage} 
            setAllImage={setAllImage}
            clickedCards={clickedCards} 
            setClickedCards={setClickedCards}
            itemCount={itemCount}
            setItemCount={setItemCount} 
            urlLink={"https://fakestoreapi.com/products/category/men's clothing"} />
        </>
    )
}