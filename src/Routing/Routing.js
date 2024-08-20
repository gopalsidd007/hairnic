import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Product from '../Components/Product/Product'
// import Contact from '../Components/Contact/Contact'
import PageNotFound from '../Layout/Header/PageNotFound'
import HeaderPart from '../Layout/Header/Header'
import Contactus from '../Components/ContactUs/Contactus'
import NewPage from '../Components/NewPage/NewPage'



const Routing = () => {
  return (
    <Router>
        <HeaderPart/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="about-page" element={<About/>}/> 
            <Route path="product-page" element={<Product/>}/> 
            <Route path="contact-page" element={<Contactus/>}/> 
            <Route path="new-page" element={<NewPage/>}/> 

            <Route path="*" element={<PageNotFound/>}/> 
        </Routes>
    </Router>
  )
}

export default Routing