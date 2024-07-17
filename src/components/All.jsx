
import { useState, useEffect } from "react";
import WearsInfo from "./imageGrid";

const useImageURL = ({urlLink ="https://fakestoreapi.com/products"}) => {
  const [allImage, setAllImage] = useState([]);
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

  return { allImage, error, loading };
};

const All = (urlLink) => {
  const { allImage, error, loading } = useImageURL(urlLink);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <WearsInfo allCards={allImage}/>
    </>
  );
};


export default All;