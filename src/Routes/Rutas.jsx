import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer';
import { NavbarHeader } from '../Components/NavbarHeader/NavbarHeader';
import { Contacto } from '../Pages/Contacto';
import { Home } from '../Pages/Home';
import { Nosotros } from '../Pages/Nosotros';
import { Productos } from '../Pages/Productos';

export const Rutas = () => {
  return (
    <Router>
      <NavbarHeader/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}


