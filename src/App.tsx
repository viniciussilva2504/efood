import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import HiokiSushi from './pages/HiokiSushi'
import Hamburgueria from './pages/Hamburgueria'
import ThaiPalace from './pages/ThaiPalace'
import SaboresBrasil from './pages/SaboresBrasil'
import LePetitBistrot from './pages/LePetitBistrot'
import { CartProvider } from './contexts/CartContext'
import { ToastProvider } from './contexts/ToastContext'
import Cart from './components/Cart'

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <GlobalStyles />
          <div className="App">
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                } 
              />
              <Route path="/restaurant/1" element={<HiokiSushi />} />
              <Route path="/restaurant/2" element={<Restaurant />} />
              <Route path="/restaurant/3" element={<Hamburgueria />} />
              <Route path="/restaurant/4" element={<ThaiPalace />} />
              <Route path="/restaurant/5" element={<SaboresBrasil />} />
              <Route path="/restaurant/6" element={<LePetitBistrot />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />
            </Routes>
            <Cart />
          </div>
        </Router>
      </CartProvider>
    </ToastProvider>
  )
}

export default App
