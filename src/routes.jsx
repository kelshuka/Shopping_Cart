
import App from './App.jsx'



const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "all/:name",
        element: <App />,
        /* children: [
        {path: "women", element: <Women />},
        {path: "men", element: <Men />},
        {path: "jewelery", element: <Jewelery />},
        {path: "electronics", element: <Electronics />},
        ] */
    },
];

export default routes;