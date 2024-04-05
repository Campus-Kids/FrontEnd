import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Producto from './Componentes/Productos/Productos.jsx'
import { Route, Routes } from "react-router"
import 'tailwindcss/tailwind.css';
import Footer from './Componentes/Footer/Footer.jsx'
import ListaProductos from './Componentes/VerProductos/ListaProductos.jsx'
import Contacto from './Componentes/Contacto/Contacto.jsx'
import Buscador from './Componentes/BuscarProductos.jsx'
import BuscarProductos from './Componentes/BuscarProductos.jsx'
// import Modal from './Componentes/Modal/Modal.jsx'

function App() {  

  return (
    <>    
    <Header/>
    {/* <BuscarProductos/> */}
    {/* <Modal/> */}
      <Routes>
        <Route path="/Productos" element={<Producto/>} />
        <Route path="/ListaProductos" element={<ListaProductos/>} />
        <Route path="/Contacto" element={<Contacto/>} />
      </Routes>      
    <Footer/>      
    </>
  )
}

export default App
