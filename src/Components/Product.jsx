/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'


const Product = ({ product }) => {
  const {dispatch} = useContext(CartContext)
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} className="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h6 className="">${product.price}</h6>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary" onClick={()=> dispatch({ type: "Add", product: product })}> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product