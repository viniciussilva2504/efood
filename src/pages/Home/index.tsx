import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/List'
export type CardapioItem = {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  quantidade: number
}
export type Restaurants = {
  foto: string
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.status}`)
        }
        return resposta.json()
      })
      .then((resposta) => {
        setRestaurants(resposta)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao buscar restaurantes:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Erro: {error}</div>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}
export default Home
