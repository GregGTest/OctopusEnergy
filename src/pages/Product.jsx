import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCT from '../data/products';

function Product() {

    const { data, error, loading } = useQuery(GET_PRODUCT);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>`Error! ${error.message}`</div>;

    const priceInPounds = (data.product.price/100).toFixed(2);
    const splitPrice = priceInPounds.split('.');
    const pounds = splitPrice[0];
    const pence = splitPrice[1];
    
    return(
        <div className='product'>
            <div className='imageContain'>
                <img src={data.product.imgUrl} alt={'Image for ' + data.product.name} />
            </div>
                <header>
                    <h1>{data.product.name}</h1>
                    <p className='productInfo'>{data.product.power} {'//'} Packet of {data.product.quantity}</p>
                </header>
                <div className='priceContain'>
                    <p className='price'>
                        <span className='pounds'>{pounds}</span>
                        <sup className='pence'>.{pence}</sup>
                    </p>
                    <div className='quantity'>
                        <label>QTY</label>
                        <div className='buttons'>
                            <button>-</button> 1 <button>+</button>
                        </div>
                    </div>
                    <button className='addToCart'>Add to cart</button>
                </div>
                <main className='description'>
                    <h2>Description</h2>
                    <div>{data.product.description}</div>
                </main>
                <section className='specifications'>
                    <h2>Specifications</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Brand</td>
                                <td>{data.product.brand}</td>
                            </tr>
                            <tr>
                                <td>Item weight</td>
                                <td>{data.product.weight}</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>{data.product.height} x {data.product.width} x {data.product.length}</td>
                            </tr>
                            <tr>
                                <td>Item model number</td>
                                <td>{data.product.modelCode}</td>
                            </tr>
                            <tr>
                                <td>Colour</td>
                                <td>{data.product.colour}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
        </div>
    )
}

export default Product;