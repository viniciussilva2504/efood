    import React from 'react'
    import RestaurantCard, { Restaurant } from '../RestaurantCard'
    import { Container, RestaurantsGrid } from './styles'

    const mockRestaurants: Restaurant[] = [
    {
        id: 1,
        name: 'Hioki Sushi',
        rating: 4.9,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=472&h=217&fit=crop',
        tags: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 2,
        name: 'La Dolce Vita Trattoria',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: 'https://www.fuiserviajante.com/wp-content/uploads/2022/05/pizza-comida-tipica-italiana.jpg.webp',
        tags: ['Italiana']
    },
    {
        id: 3,
        name: 'A Hamburgueria do Bairro',
        rating: 4.7,
        description: 'A Hamburgueria do Bairro traz o melhor hambúrguer artesanal da região diretamente para sua casa! Com carnes selecionadas, pães frescos e ingredientes de primeira qualidade, cada mordida é uma experiência única. Peça já e saboreie!',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=472&h=217&fit=crop',
        tags: ['Hambúrguer']
    },
    {
        id: 4,
        name: 'Thai Palace',
        rating: 4.8,
        description: 'Descubra os sabores exóticos da Tailândia com o Thai Palace! Pratos autênticos preparados com especiarias tradicionais e ingredientes frescos. Pad Thai, curries aromáticos e sobremesas deliciosas. Entrega rápida e sabor garantido!',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=472&h=217&fit=crop',
        tags: ['Tailandesa']
    },
    {
        id: 5,
        name: 'Sabores do Brasil',
        rating: 4.5,
        description: 'O Sabores do Brasil oferece o que há de melhor na culinária nacional! Feijoada completa, picanha grelhada, pastel de queijo e muito mais. Desfrute dos sabores que fazem o Brasil único, entregues com carinho na sua porta.',
        image: 'https://s2-receitas.glbimg.com/GyuIST9HlLttYS1X9ZO0T--q8wI=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/U/K/zp2llURnexxCaOgLe8iA/bobo-de-camarao-receita-2.jpg',
        tags: ['Brasileira']
    },
    {
        id: 6,
        name: 'Le Petit Bistrot',
        rating: 4.9,
        description: 'Le Petit Bistrot traz a sofisticação da cozinha francesa para o seu lar! Pratos elaborados com técnicas clássicas, ingredientes premium e apresentação impecável. Coq au vin, ratatouille e sobremesas divinas aguardam por você.',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/10/230521-decoracao-de-bistro-o-que-um-restaurante-frances-deve-ter-825x540.jpg',
        tags: ['Francesa']
    }
    ]

    const RestaurantsList: React.FC = () => {
    return (
        <Container>
        <div className="container">
            <RestaurantsGrid>
            {mockRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
            </RestaurantsGrid>
        </div>
        </Container>
    )
    }

    export default RestaurantsList