import React from 'react'
import Header from './Header'
import Cart from '../features/cart/Cart'
import CartOverview from '../features/cart/CartOverview'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
    <Header />
    <main>
        
        <Outlet/>
    </main>
    <CartOverview />
    </div>
  )
}

export default AppLayout