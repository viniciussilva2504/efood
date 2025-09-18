import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Test from './pages/Test'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Test />} />
    <Route path="/home" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
