import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import Cart from "./pages/Cart.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [cart, setCart] = useState([1,2])

  function totalElements(){
    return cart.length
  }

  function handleClick(item){
    setCart([...cart, item])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home elementsInCart={totalElements()}/>}/>
        <Route path='/shop' element={<Shop elementsInCart={totalElements()}
          click={handleClick}/>}/>
        <Route path='/cart' element={<Cart elementsInCart={totalElements()}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
