import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App() {
  return (
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
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
