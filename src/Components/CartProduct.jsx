/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import Product from './Product';


const CartProduct = ({product}) => {

    const {cart, dispatch} = useContext(CartContext)

    const Increase = (id) => {
       const Index = cart.findIndex( p => p.id === id)
       if(cart[Index].quantity < 10) {
        dispatch({type: "Increase", id})
       }
    };
    
    const Decrease = (id) => {
      const Index = cart.findIndex( p => p.id === id)
      if(cart[Index].quantity > 1) {
       dispatch({type: "Decrease", id})
      }
    };

  return (
    <div className='d-flex border mb-3'>
        <img src={product.image} className='col-2 px-4' alt="" />
        <div className='detail ms-4'>
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <div className='buttons mt-3'>
                <button className='rounded-circle px-2' onClick={() => Decrease(product.id)}>
                      <b>-</b></button>
                <button className='rounded'>{product.quantity} </button>
                <button className='rounded-circle px-2'onClick={() => Increase(product.id)}>
                     <b>+</b></button>
            </div>
            <button className='btn btn-sm btn-danger mt-3 mb-2' onClick={()=> dispatch({type:"Remove" , id: product.id})}>Remove</button>
        </div>
    </div>
  )
}

export default CartProduct