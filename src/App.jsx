import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCT from './data/products';
import Product from './pages/Product';

import logo from './assets/logo.svg';
import basketIcon from './assets/basket.svg';

const App = () => {
    const { data, error, loading } = useQuery(GET_PRODUCT);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>`Error! ${error.message}`</div>;

    return (     
        <div className='container'>
            <nav>
                <img src={logo} alt='Octopus Energy logo' width='190px' />
                <img src={basketIcon} alt='Basket icon' width='30px'/>
            </nav>
            <Product {...data}/>
            <footer>
                <p>Octopus Energy Ltd is a company registered in England and Wales.</p>
                <p>Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F8HT</p>
            </footer>
        </div>
    )
};

export default App;
