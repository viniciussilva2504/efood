import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/List'
import SkeletonLoader from '../../components/SkeletonLoader'
import { SkeletonList, SkeletonItem } from '../../components/SkeletonLoader/styles'
import { useEffect, useState } from 'react'
import { getRestaurants, SupabaseRestaurant } from '../../services/supabaseData'

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

const Home = (): React.JSX.Element => {
  const [restaurants, setRestaurants] = useState<SupabaseRestaurant[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        setRestaurants(data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Erro ao carregar restaurantes')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <SkeletonList>
          {[...Array(6)].map((_, i) => (
            <SkeletonItem key={i}>
              <SkeletonLoader width="100%" height="180px" radius="16px" />
              <SkeletonLoader width="60%" height="24px" />
              <SkeletonLoader width="80%" height="16px" />
              <SkeletonLoader width="40%" height="16px" />
            </SkeletonItem>
          ))}
        </SkeletonList>
        <Footer />
      </>
    )
  }
  if (error || !restaurants) {
    return <div>Erro ao carregar restaurantes</div>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants as unknown as Restaurants[] || []} />
      <Footer />
    </>
  )
}
export default Home
