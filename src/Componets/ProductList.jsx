import React from 'react';
import products from "../../src/api/products.json";
import BeforeCart from './BeforeCart';
import AfterCart from './AfterCart';
import '../Styles/ProductList.css'




const ProductList = () => {
    console.log(products);
    return (
        <section className='container'>
            {products.map((product, key) => (
                <div className="product-container" key={key}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                   <BeforeCart/>
                   <AfterCart/>
                </div>
            ))}
        </section>
    );
}

export default ProductList;

