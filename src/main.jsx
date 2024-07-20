import React, { useState} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'

import Women from './components/women.jsx'
import Men from './components/men.jsx'
import Electronics from './components/electronics.jsx'
import Jewelery from './components/jewelery.jsx'
import AllWears from './components/AllWears.jsx'
import Carts from './components/carts.jsx'




const AppRouter = () => {

  const [allImage, setAllImage] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  

 
  const routes = [
  {
      path: "/",
      element: <App itemCount={itemCount} />,
      children: [
          {index:true, element: <AllWears 
            allImage={allImage} setAllImage={setAllImage} clickedCards={clickedCards} 
            setClickedCards={setClickedCards} itemCount={itemCount} setItemCount={setItemCount} />},
          {path: "all", element: <AllWears 
            allImage={allImage} setAllImage={setAllImage} clickedCards={clickedCards} 
            setClickedCards={setClickedCards} itemCount={itemCount} setItemCount={setItemCount} />},
          {path: "women", element: <Women 
            allImage={allImage} setAllImage={setAllImage} clickedCards={clickedCards} 
            setClickedCards={setClickedCards} itemCount={itemCount} setItemCount={setItemCount} />},
          {path: "men", element: <Men 
            allImage={allImage} setAllImage={setAllImage} clickedCards={clickedCards} 
            setClickedCards={setClickedCards} itemCount={itemCount} setItemCount={setItemCount} />},
          {path: "jewelery", element: <Jewelery 
            allImage={allImage} setAllImage={setAllImage} clickedCards={clickedCards} 
            setClickedCards={setClickedCards} itemCount={itemCount} setItemCount={setItemCount} />},
          {path: "electronics", element: <Electronics 
            allImage={allImage} setAllImage={setAllImage} clickedCards={clickedCards} 
            setClickedCards={setClickedCards} itemCount={itemCount} setItemCount={setItemCount} />},
          {path: "carts", element: <Carts 
            allCards={clickedCards} itemCount={itemCount} setItemCount={setItemCount} 
            totalPrice={totalPrice} setTotalPrice={setTotalPrice}  />},
      ],
  },
  
];

const router = createBrowserRouter(routes); 
return <RouterProvider router={router} /> 

};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />  
  </React.StrictMode>,
)

