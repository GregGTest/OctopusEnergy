import React from 'react';
import Product from './pages/Product';

import logo from './assets/logo.svg';
import basketIcon from './assets/basket.svg';

const App = () => {
    return (     
        <div className='container'>
            <nav>
                <img src={logo} alt='Octopus Energy logo' width='190px' />
                <img src={basketIcon} alt='Basket icon' width='30px'/>
            </nav>
            <Product/>
            <footer>
                <p>Octopus Energy Ltd is a company registered in England and Wales.</p>
                <p>Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F8HT</p>
            </footer>
        </div>
    )
};

export default App;
