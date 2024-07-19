
import { Link } from 'react-router-dom'
import { Outlet, useParams } from 'react-router-dom'

import './App.css'
import { IconShoppingCart } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { Indicator } from '@mantine/core';


function App({itemCount}) {
    const {name} = useParams();

  return (
    <div className='container'>
      <header>
        <section className='searchbar'>
          <div className='searchs'>
            <label>
                <input
                    type="text"
                    id='search'
                />
                <IconSearch />
            </label>
          </div>

          <div className='logSign'>
            <button> login </button>
            <button> signup </button>
          </div>
          
        </section>
        
        <section className='navigates'>
          <nav>
            <button type='button'> <Link to="/all"> All </Link> </button>
            <button type='button'> <Link to="/women"> Women </Link> </button>
            <button type='button'> <Link to="/men"> Men </Link> </button>
            <button type='button'> <Link to="/jewelery"> Jewelery </Link> </button>
            <button type='button'> <Link to="/electronics"> Electronics </Link> </button>
          </nav>
        </section>

      </header>
      
      <main>
        
        <section className='items'>
          
          < Outlet />

        </section>

      </main>

      <footer>

        <div className='shop'>
           Home
        </div>

        <div className='cartDetail'>
          <div>
            {/* <Indicator label={itemCount} size={} color='' >  </Indicator> */}
            <Link to="/carts"> <IconShoppingCart /> </Link> {itemCount}
          </div>
          <div>
            Personal Details
          </div>
          
        </div>

      </footer>
    </div>
  )
}

export default App
