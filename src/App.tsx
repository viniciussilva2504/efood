import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
