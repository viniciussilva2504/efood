        import React, { useEffect, useState } from 'react'
        import { useParams, Link } from 'react-router-dom'
        import { Restaurant } from '../../components/RestaurantCard'
        import MenuCard from '../../components/MenuCard'
        import Header from '../../components/Header'
        import Footer from '../../components/Footer'
        import { 
        Container, 
        BannerContainer, 
        BannerImage, 
        BannerInfo, 
        RestaurantType, 
        RestaurantName, 
        MenuContainer, 
        MenuGrid 
        } from './styles'

        export interface MenuItem {
        id: number
        name: string
        description: string
        price: number
        image: string
        }

        const mockMenuItemsByRestaurant: { [key: number]: MenuItem[] } = {
        1: [
            {
            id: 1,
            name: 'Sashimi Misto',
            description: 'Seleção especial de sashimis frescos: salmão, atum, peixe branco e polvo. Servido com wasabi e shoyu premium.',
            price: 89.90,
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=304&h=167&fit=crop'
            },
            {
            id: 2,
            name: 'Combinado Especial',
            description: 'Mix de sushis e sashimis com 20 peças: nigiri de salmão, atum, camarão e sashimi variado. Para 2 pessoas.',
            price: 156.90,
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/ab/35/d2/combinado-misto-duplo.jpg'
            },
            {
            id: 3,
            name: 'Hot Roll Salmão',
            description: 'Uramaki empanado e frito com salmão, cream cheese e cebolinha. Acompanha molho tarê e maionese temperada.',
            price: 45.90,
            image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=304&h=167&fit=crop'
            },
            {
            id: 4,
            name: 'Temaki Salmão Grelhado',
            description: 'Cone de alga nori com arroz temperado, salmão grelhado, pepino, avocado e molho de gergelim.',
            price: 28.90,
            image: 'https://djapa.com.br/wp-content/uploads/2019/11/temaki-salmao-grelhado-1.jpg'
            },
            {
            id: 5,
            name: 'Yakisoba de Frutos do Mar',
            description: 'Macarrão yakisoba salteado com camarão, lula, polvo e vegetais. Temperado com molho especial da casa.',
            price: 67.90,
            image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=304&h=167&fit=crop'
            },
            {
            id: 6,
            name: 'Mochi de Sorvete',
            description: 'Sobremesa tradicional japonesa com massa de arroz glutinoso e recheio de sorvete. Sabores: manga, coco e chocolate.',
            price: 24.90,
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=304&h=167&fit=crop'
            }
        ],
        2: [ // La Dolce Vita Trattoria
            {
            id: 1,
            name: 'Pizza Margherita',
            description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            price: 60.90,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLSfrVpl7G8H6uNkRv34qqcZbDP_tzLysUg&s'
            },
            {
            id: 2,
            name: 'Pizza Pepperoni',
            description: 'Para os amantes do sabor intenso: molho de tomate, mussarela derretida e pepperoni de primeira qualidade. Uma explosão de sabor!',
            price: 68.90,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=304&h=167&fit=crop'
            },
            {
            id: 3,
            name: 'Pizza Quattro Stagioni',
            description: 'As quatro estações em uma pizza: presunto, cogumelos, alcachofras e azeitonas. Uma experiência gastronômica única!',
            price: 75.90,
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=304&h=167&fit=crop'
            },
            {
            id: 4,
            name: 'Risotto de Camarão',
            description: 'Risotto cremoso com camarões frescos, alho, vinho branco e queijo parmesão. Um prato sofisticado e irresistível!',
            price: 89.90,
            image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=304&h=167&fit=crop'
            },
            {
            id: 5,
            name: 'Lasanha Bolognese',
            description: 'Camadas perfeitas de massa, molho bolognese tradicional e muito queijo. Um clássico italiano que conquista!',
            price: 72.90,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcFNnYYBV0cbkYZJXTt5xj3TXMfZ0dGhJhg&s'
            },
            {
            id: 6,
            name: 'Tiramisu',
            description: 'A sobremesa italiana mais famosa: café, mascarpone, biscoitos e cacau. O final perfeito para sua refeição!',
            price: 32.90,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=304&h=167&fit=crop'
            }
        ]
        }

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
        }
        ]

        const RestaurantPage: React.FC = () => {
        const { id } = useParams<{ id: string }>()
        const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
        const [menuItems, setMenuItems] = useState<MenuItem[]>([])

        useEffect(() => {
            // Simular busca do restaurante por ID
            const restaurantId = parseInt(id || '0')
            const found = mockRestaurants.find(r => r.id === restaurantId)
            setRestaurant(found || mockRestaurants[1]) // Default para La Dolce Vita
            
            // Buscar itens do menu específicos do restaurante
            const items = mockMenuItemsByRestaurant[restaurantId] || mockMenuItemsByRestaurant[2]
            setMenuItems(items)
        }, [id])

        if (!restaurant) {
            return <div>Carregando...</div>
        }

        return (
            <>
            <Header isRestaurantPage />
            <BannerContainer>
                <BannerImage src={restaurant.image} alt={restaurant.name} />
                <Container>
                <BannerInfo>
                    <RestaurantType>{restaurant.tags[0]}</RestaurantType>
                    <RestaurantName>{restaurant.name}</RestaurantName>
                </BannerInfo>
                </Container>
            </BannerContainer>
            
            <MenuContainer>
                <Container>
                <MenuGrid>
                    {menuItems.map(item => (
                    <MenuCard key={item.id} menuItem={item} />
                    ))}
                </MenuGrid>
                </Container>
            </MenuContainer>
            
            <Footer />
            </>
        )
        }

        export default RestaurantPage
