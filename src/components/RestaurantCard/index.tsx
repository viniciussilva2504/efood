import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  ImageContainer,
  RestaurantImage,
  InfoContainer,
  RestaurantInfo,
  RestaurantName,
  RestaurantRating,
  RestaurantDescription,
  TagContainer,
  Tag,
  ActionButton
} from './styles'

export interface Restaurant {
  id: number
  name: string
  rating: number
  description: string
  image: string
  tags: string[]
}

interface RestaurantCardProps {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Card>
      <ImageContainer>
        <RestaurantImage src={restaurant.image} alt={restaurant.name} />
        <TagContainer>
          {restaurant.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </ImageContainer>
      <InfoContainer>
        <RestaurantInfo>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantRating>
            {restaurant.rating}
            <img src="/images/estrela.svg" alt="Classificação" />
          </RestaurantRating>
        </RestaurantInfo>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        <Link to={`/restaurant/${restaurant.id}`}>
          <ActionButton>Saiba mais</ActionButton>
        </Link>
      </InfoContainer>
    </Card>
  )
}

export default RestaurantCard