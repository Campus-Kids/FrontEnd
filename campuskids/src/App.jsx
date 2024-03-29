import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Producto from './Componentes/Productos/Productos.jsx'
import { Route, Routes } from "react-router"
import 'tailwindcss/tailwind.css';

function App() {  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Productos" element={<Producto/>} />
      </Routes>
    </>
  )
}

export default App
