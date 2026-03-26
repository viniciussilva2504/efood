import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Admin from './pages/Admin'


const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
)

export default Rotas
