import React, { useState} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes';


import App from './App.jsx'

import Women from './components/women.jsx'
import Men from './components/men.jsx'
import Electronics from './components/electronics.jsx'
import Jewelery from './components/jewelery.jsx'
import AllWears from './AllWears.jsx'
import Carts from './carts.jsx'



//import './index.css'


/* const router = createBrowserRouter(routes); */

const AppRouter = () => {

  const [allImage, setAllImage] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = () => {
    setItemCount(itemCount + 1);
  }

  const subItem = () => {
    setItemCount(itemCount - 1);
  }
 
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
            allCards={clickedCards} itemCount={itemCount} addItem={addItem} subItem={subItem} />},
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


/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
) */
