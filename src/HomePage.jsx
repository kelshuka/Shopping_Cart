import { Link } from 'react-router-dom'
import './App.css'
import background from "./images/bg.jpg"

export default function HomePage(){
    return (
        <div className='homePage' style={
            {
                backgroundImage: `url(${background})`,
                height: "100vh",
                /* marginTop: "-70px", */
                /* fontSize: "50px", */
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }
        }>

            <section className='homeDesc'>
               <p className='homeTitle'>The Fake Store App </p>
               <p> Welcome to Fake Store! Shop every imaginary wears and accessories!!! </p>
               <p> Click the link below to start shopping! 
                Ohh...you don't need to pay, we gat you covered love!!! </p>
               <p> <button> <Link to="/"> Shop Now!! </Link> </button> </p>
            </section>
            
        </div>
    )
}