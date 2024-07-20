
import All from './All.jsx'

const AllWears = ({allImage,setAllImage,clickedCards, setClickedCards,itemCount, setItemCount}) =>{
    return (
        <>
            <All 
            allImage={allImage} 
            setAllImage={setAllImage}
            clickedCards={clickedCards} 
            setClickedCards={setClickedCards}
            itemCount={itemCount}
            setItemCount={setItemCount} />
        </>
    )
};

export default AllWears;