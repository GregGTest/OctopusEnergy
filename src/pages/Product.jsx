import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCT from '../data/products';

function Product() {

    const { data, error, loading } = useQuery(GET_PRODUCT);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>`Error! ${error.message}`</div>;
    return(
        <div className='product'>
        </div>
    )
}

export default Product;