import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'
import LoginPage from '../Pages/LoginPage'
import Payment from '../Pages/Payment'
import Crud from './Crud'
import Orders from './Orders'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/login' element={<LoginPage />} />
           
            <Route path='/admin' element={<Admin />}/>
            
            
            <Route path='/admin/' element={<Crud />} />
                <Route path='/admin/order' element={<Orders />} />

        </Routes>
    )
}

export default AllRoutes