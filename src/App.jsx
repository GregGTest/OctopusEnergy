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
        </div>
    )
};

export default App;
