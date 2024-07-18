
import App from './App.jsx'

import Women from './components/women.jsx'
import Men from './components/men.jsx'
import Electronics from './components/electronics.jsx'
import Jewelery from './components/jewelery.jsx'
import AllWears from './AllWears.jsx'
import Carts from './carts.jsx'




const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {index:true, element: <AllWears />},
            {path: "all", element: <AllWears />},
            {path: "women", element: <Women />},
            {path: "men", element: <Men />},
            {path: "jewelery", element: <Jewelery />},
            {path: "electronics", element: <Electronics />},
            {path: "carts", element: <Carts />},
        ],
    },
    
];

export default routes;