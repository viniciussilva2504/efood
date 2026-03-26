import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'
import { toggleFavorite, getFavorites } from '../../services/supabaseData'

const HeartButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.2s;
  filter: ${({ $active }) => ($active ? 'none' : 'grayscale(1)')};

  &:hover {
    transform: scale(1.2);
  }
`

type Props = {
  restaurantId: number
}

const FavoriteButton = ({ restaurantId }: Props) => {
  const { user } = useAuth()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (user) {
      getFavorites(user.id).then((favs) => {
        setIsFavorite(favs.includes(restaurantId))
      })
    }
  }, [user, restaurantId])

  const handleToggle = async () => {
    if (!user) return
    const nowFavorite = await toggleFavorite(user.id, restaurantId)
    setIsFavorite(nowFavorite)
  }

  if (!user) return null

  return (
    <HeartButton $active={isFavorite} onClick={handleToggle} title="Favoritar restaurante">
      {isFavorite ? '❤️' : '🤍'}
    </HeartButton>
  )
}

export default FavoriteButton
