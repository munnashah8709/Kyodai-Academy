import React from 'react'
import Login from '../Login-Registration.js/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Home from '../component/Home';
import About from '../component/About';
import CourseDetails from '../component/Coursedetails';

function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/coursedetails' element={<CourseDetails />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default Routing
