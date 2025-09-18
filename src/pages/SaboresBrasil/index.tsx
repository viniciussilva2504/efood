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

const brasilMenu: MenuItem[] = [
  {
    id: 1,
    name: 'Feijoada Completa',
    description: 'Feijoada tradicional com feijão preto, linguiça, costelinha, paio, acompanha arroz, couve e farofa.',
    image: 'https://s2-receitas.glbimg.com/GyuIST9HlLttYS1X9ZO0T--q8wI=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/U/K/zp2llURnexxCaOgLe8iA/bobo-de-camarao-receita-2.jpg',
    price: 42.90
  },
  {
    id: 2,
    name: 'Picanha Grelhada',
    description: 'Picanha grelhada no ponto, acompanha arroz, feijão tropeiro, vinagrete e farofa.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=320&h=320&fit=crop',
    price: 48.90
  },
  {
    id: 3,
    name: 'Bobó de Camarão',
    description: 'Cremoso bobó de camarão com mandioca, leite de coco, dendê e temperos especiais.',
    image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=320&h=320&fit=crop',
    price: 38.90
  },
  {
    id: 4,
    name: 'Moqueca de Peixe',
    description: 'Moqueca capixaba com peixe fresco, tomate, cebola, pimentão, leite de coco e dendê.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=320&h=320&fit=crop',
    price: 36.90
  },
  {
    id: 5,
    name: 'Pastel de Queijo',
    description: 'Pastel tradicional recheado com queijo cremoso, massa crocante e dourada.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=320&h=320&fit=crop',
    price: 8.90
  },
  {
    id: 6,
    name: 'Brigadeiro Gourmet',
    description: 'Sobremesa clássica brasileira com chocolate belga e granulado especial.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=320&h=320&fit=crop',
    price: 6.90
  }
]

const SaboresBrasil: React.FC = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <BannerImage 
          src="https://s2-receitas.glbimg.com/GyuIST9HlLttYS1X9ZO0T--q8wI=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/U/K/zp2llURnexxCaOgLe8iA/bobo-de-camarao-receita-2.jpg" 
          alt="Sabores do Brasil"
        />
        <Container>
          <BannerInfo>
            <RestaurantType>Brasileira</RestaurantType>
            <RestaurantName>Sabores do Brasil</RestaurantName>
          </BannerInfo>
        </Container>
      </BannerContainer>

      <MenuContainer>
        <Container>
          <MenuGrid>
            {brasilMenu.map(item => (
              <MenuCard key={item.id} menuItem={item} />
            ))}
          </MenuGrid>
        </Container>
      </MenuContainer>

      <Footer />
    </>
  )
}

export default SaboresBrasil
