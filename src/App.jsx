import { useState } from 'react'
import { Link } from 'react-router-dom'

import All from './components/All'

import { useParams } from 'react-router-dom'
import Women from './components/women.jsx'
import Men from './components/men.jsx'
import Electronics from './components/electronics.jsx'
import Jewelery from './components/jewelery.jsx'

//import './App.css'

function App() {
    const {name} = useParams();

  return (
    <>
      <header>
        <section className='searchbar'>

        <div>
          <section>login</section>
          <section>signup</section>
        </div>
          
        </section>
        
        <section className='navigates'>
          <nav>
            <button type='button'> <Link to="all"> All </Link> </button>
            <button type='button'> <Link to="women"> Women </Link> </button>
            <button type='button'> <Link to="men"> Men </Link> </button>
            <button type='button'> <Link to="jewelery"> Jewelery </Link> </button>
            <button type='button'> <Link to="electronics"> Electronics </Link> </button>
          </nav>
        </section>

      </header>
      
      <main>
        
        <section className='items'>
          {name === "women" ? (
              <Women />
          ): name === "men" ? (
              <Men />
          ): name === "jewelery" ? (
              <Jewelery />
          ): name === "electronics" ? (
              <Electronics />
          ): name === "all" ? (
              <All />
          ):(
              <All />
          )}

        </section>

      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
