import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'
import GlobalStyles from './styles/GlobalStyles'
import Cart from './components/Cart'
import { AuthProvider } from './contexts/AuthContext'
import { ToastProvider } from './components/Toast'


function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>
            <GlobalStyles />
            <Rotas />
            <Cart />
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App
