import React from 'react';

const Product = ({product}) => {
    const [quantity, setQuantity] = React.useState(1);
    const [basket, setBasket] = React.useState({items:[]});

    const priceInPounds = (product.price/100).toFixed(2);
    const splitPrice = priceInPounds.split('.');
    const pounds = splitPrice[0];
    const pence = splitPrice[1];

    return(
        <div className='product'>
            <div className='imageContain'>
                <img src={product.imgUrl} alt={'Image for ' + product.name} />
            </div>
            <header>
                <h1>{product.name}</h1>
                <p className='productInfo'>{product.power} {'//'} Packet of {product.quantity}</p>
            </header>
            <div className='priceContain'>
                <data value={priceInPounds} className='price'>
                    <span className='pounds'>{pounds}</span>
                    <span className='pence'>.{pence}</span>
                </data>
                <div className='quantity'>
                    <label>QTY</label>
                    <div className='buttons'>
                        <button onClick={()=>setQuantity(Math.max(1,quantity-1))}>-</button> 
                        <data value={quantity} data-testid='productQuantity'>{quantity}</data>
                        <button onClick={()=>setQuantity(quantity+1)}>+</button>
                    </div>
                </div>
                <button className='addToCart' onClick={()=>setBasket({...basket, items: [{id: product.id, quantity: quantity}] })}>Add to cart</button>
            </div>
            <main className='description'>
                <h2>Description</h2>
                <div>{product.description}</div>
            </main>
            <section className='specifications'>
                <h2>Specifications</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Brand</td>
                            <td>{product.brand}</td>
                        </tr>
                        <tr>
                            <td>Item weight</td>
                            <td>{product.weight}</td>
                        </tr>
                        <tr>
                            <td>Dimensions</td>
                            <td>{product.height} x {product.width} x {product.length}</td>
                        </tr>
                        <tr>
                            <td>Item model number</td>
                            <td>{product.modelCode}</td>
                        </tr>
                        <tr>
                            <td>Colour</td>
                            <td>{product.colour}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Product;