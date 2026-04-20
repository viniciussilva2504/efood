import React from 'react'
import { ContainerRest, Description, Infos, TitleRow, ActionsRow, StyledButton } from './styles'
import estrelaImg from '../../assets/images/estrela.png'
import Tag from '../Tag'
import FavoriteButton from '../FavoriteButton'
import { Link } from 'react-router-dom'
import { useGeolocation, getRestaurantDistance } from '../../hooks/useGeolocation'

type Props = {
  id: number
  title: string
  image: string
  description: string
  classification: string
  infos: TagInfo[]
}
export type TagInfo = {
  text: string
  size: 'big' | 'small'
}

const Restaurant = ({
  description,
  image,
  title,
  classification,
  infos,
  id
}: Props) => {
  const { position } = useGeolocation()
  const distance = position
    ? getRestaurantDistance(id, position.latitude, position.longitude)
    : null

  return (
    <ContainerRest>
      <img src={image} alt={`Photo of restaurant ${title}`} />
      <Infos>
        {infos.map((info) => (
          <Tag size={info.size} key={info.text}>
            {info.text}
          </Tag>
        ))}
      </Infos>
      <TitleRow>
        <h3>{title}</h3>
        <span>
          {classification}
          <img src={estrelaImg} alt="Rating" />
        </span>
      </TitleRow>
      {distance !== null && (
        <p style={{ fontSize: '12px', color: '#999', margin: '0 8px 8px', fontStyle: 'italic' }}>
          📍 {distance} km from you
        </p>
      )}
      <Description>{description}</Description>
      <ActionsRow>
        <Link to={`/perfil/${id}`}>
          <StyledButton type="button">Learn more</StyledButton>
        </Link>
        <FavoriteButton restaurantId={id} aria-label="Mark as favorite" />
      </ActionsRow>
    </ContainerRest>
  )
}

export default Restaurant
