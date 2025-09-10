import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import { Container, BannerContainer, BannerImage, BannerInfo, RestaurantType, RestaurantName, MenuContainer, MenuGrid } from '../Restaurant/styles'

export interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  price: number
}

const hiokiMenu: MenuItem[] = [
  {
    id: 1,
    name: 'Sashimi de Salmão',
    description: 'Fatias frescas de salmão, cortadas na espessura perfeita, servidas com wasabi e gengibre em conserva.',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=320&h=320&fit=crop',
    price: 32.90
  },
  {
    id: 2,
    name: 'Combinado Especial',
    description: 'Uma seleção dos nossos melhores sushis e sashimis, incluindo salmão, atum e peixe branco.',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=320&h=320&fit=crop',
    price: 89.90
  },
  {
    id: 3,
    name: 'Temaki de Salmão',
    description: 'Cone de alga nori recheado com salmão fresco, pepino e cream cheese.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=320&h=320&fit=crop',
    price: 18.90
  },
  {
    id: 4,
    name: 'Uramaki Filadélfia',
    description: 'Arroz por fora, alga nori, salmão, cream cheese e pepino, finalizado com gergelim.',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=320&h=320&fit=crop',
    price: 28.90
  },
  {
    id: 5,
    name: 'Yakisoba de Frango',
    description: 'Macarrão oriental refogado com legumes frescos e pedaços suculentos de frango.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=320&h=320&fit=crop',
    price: 24.90
  },
  {
    id: 6,
    name: 'Hot Roll',
    description: 'Uramaki empanado e frito, recheado com salmão e cream cheese, servido quente.',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=320&h=320&fit=crop',
    price: 22.90
  }
]

const HiokiSushi: React.FC = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <BannerImage 
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=400&fit=crop" 
          alt="Hioki Sushi"
        />
        <Container>
          <BannerInfo>
            <RestaurantType>Japonesa</RestaurantType>
            <RestaurantName>Hioki Sushi</RestaurantName>
          </BannerInfo>
        </Container>
      </BannerContainer>

      <MenuContainer>
        <Container>
          <MenuGrid>
            {hiokiMenu.map(item => (
              <MenuCard key={item.id} item={item} onClick={() => {}} />
            ))}
          </MenuGrid>
        </Container>
      </MenuContainer>

      <Footer />
    </>
  )
}

export default HiokiSushi
