/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
   
  )
}


export default App