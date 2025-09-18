import { Routes, Route } from 'react-router-dom'
import SimpleHome from './pages/SimpleHome'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<SimpleHome />} />
  </Routes>
)

export default Rotas
