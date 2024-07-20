
import { useState, useEffect } from "react";
import WearsInfo from "./imageGrid";


const All = ({allImage,setAllImage,clickedCards, setClickedCards, itemCount, setItemCount, urlLink ="https://fakestoreapi.com/products"}) => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
        const wearsImages = async () => {
            const response = await fetch(urlLink, { mode: "cors" })
            
            const response2 = await response.json();
            if (response2.status >= 400) {
            throw new Error("server error");
            }
            
            const response3 = response2.map((res2) => {
    
                return {
                    id: res2.id,
                    url: res2.image,
                    title: res2.title,
                    price: res2.price,
                };
            });

            setAllImage(response3);
        };
        wearsImages();
    } catch(error) {
        setError(error);
    } finally{ 
        setLoading(false);
    }
  }, []);

 

  const handleClick = (card) => {

      setClickedCards([...clickedCards,card]);
      setItemCount(itemCount + 1);
    
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <WearsInfo allCards={allImage} onCardClick={handleClick}/>
      
    </>
  );

};


export default All;