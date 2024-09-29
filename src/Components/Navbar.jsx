/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'




const Navbar = () => {
   const {cart} = useContext(CartContext)

  return (
    <div className='d-flex justify-content-between bg-secondary px-3 py-3 text-white'>
        <Link to='/' className='navbar-brand fs-4 fw-bolder'>Shop</Link>
        {/* <Link to='/cart' className='navbar-brand fs-5 text-white'> cart ({cart.length})</Link> */}
        <Link to='/cart' className='navbar-brand fs-5 text-white'>Cart({cart.length})</Link>
    </div>
  )
}

export default Navbar