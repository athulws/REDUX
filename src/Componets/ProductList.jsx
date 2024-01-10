import React, { useState,useEffect } from 'react';
import products from "../../src/api/products.json";
import BeforeCart from './BeforeCart';
import AfterCart from './AfterCart';
import '../Styles/ProductList.css'

//redux nte ullil ulla sadanam react il fetch cheyyanaan "useSelect"
import { useSelector } from 'react-redux';

const ProductList = () => {
    const { cartCount} = useSelector((state) => state.cart); // state.cart il ulla cart is from store.js // ithil ulla "(state)" ishtamullath ittathaan
    

    
       return (
        <section className='container'>
            {products.map((product, key) => (
                <div className="product-container" key={key}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                    {cartCount > 0 ? <AfterCart/>:<BeforeCart/>}
                </div>
            ))}
        </section>
    );
}

export default ProductList;

