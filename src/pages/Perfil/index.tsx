import React from 'react'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import FavoriteButton from '../../components/FavoriteButton'
import ReviewList from '../../components/ReviewList'
import SkeletonLoader from '../../components/SkeletonLoader'
import { SkeletonList, SkeletonItem } from '../../components/SkeletonLoader/styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRestaurantById, SupabaseRestaurant } from '../../services/supabaseData'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<SupabaseRestaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      getRestaurantById(Number(id))
        .then((data) => {
          setRestaurante(data)
          setLoading(false)
        })
        .catch(() => {
          setError('Error loading restaurant')
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return (
      <>
        <HeaderPerfil tipo="" titulo="" capa="" />
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '16px 8px 0' }}>
          <SkeletonLoader width="120px" height="40px" radius="8px" />
        </div>
        <SkeletonList>
          {[...Array(4)].map((_, i) => (
            <SkeletonItem key={i}>
              <SkeletonLoader width="100%" height="120px" radius="16px" />
              <SkeletonLoader width="60%" height="20px" />
              <SkeletonLoader width="80%" height="14px" />
              <SkeletonLoader width="40%" height="14px" />
            </SkeletonItem>
          ))}
        </SkeletonList>
        <Footer />
      </>
    )
  }
  if (error || !restaurante) {
    return <div>Erro ao carregar restaurante</div>
  }

  return (
    <>
      <HeaderPerfil
        tipo={restaurante.tipo as unknown as string}
        titulo={restaurante.titulo}
        capa={restaurante.capa}
      />
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '16px 8px 0' }}>
        <FavoriteButton restaurantId={restaurante.id} />
      </div>
      {restaurante.cardapio && (
        <FoodList cardapio={restaurante.cardapio.map((item) => ({
          ...item,
          preco: Number(item.preco),
          quantidade: 1
        }))} />
      )}
      {id && <ReviewList restaurantId={Number(id)} />}
      <Footer />
    </>
  )
}

export default Perfil
