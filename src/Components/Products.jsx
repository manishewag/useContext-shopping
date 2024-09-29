/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Data from '../../Data.json'
import Product from './Product'

const  Products = () => {
    const [products, setProducts] = useState(Data.products)
  return (
    <div className="container mt-5">
    <div className='row row-cols-md-2 g-4'>
        {
            products.map(p =>(
               <Product product = {p} key={p.id}/> 
            ))
        }
    </div>
    </div>
  )
}

export default Products
