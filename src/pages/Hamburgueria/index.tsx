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

    const hamburgueriaMenu: MenuItem[] = [
    {
        id: 1,
        name: 'Hambúrguer Clássico',
        description: 'Hambúrguer artesanal com carne bovina 180g, queijo cheddar, alface, tomate e molho especial da casa.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=320&h=320&fit=crop',
        price: 24.90
    },
    {
        id: 2,
        name: 'Bacon Burger',
        description: 'Hambúrguer com carne 200g, queijo, bacon crocante, cebola caramelizada e molho barbecue.',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=320&h=320&fit=crop',
        price: 28.90
    },
    {
        id: 3,
        name: 'Double Burger',
        description: 'Dois hambúrgueres de 120g cada, queijo duplo, alface, tomate, picles e molho especial.',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=320&h=320&fit=crop',
        price: 32.90
    },
    {
        id: 4,
        name: 'Veggie Burger',
        description: 'Hambúrguer vegetariano de grão-de-bico e quinoa, queijo vegano, rúcula e molho de ervas.',
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=320&h=320&fit=crop',
        price: 22.90
    },
    {
        id: 5,
        name: 'Batata Frita Especial',
        description: 'Batatas rústicas cortadas na casa, temperadas com alecrim e servidas com molho aioli.',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=320&h=320&fit=crop',
        price: 16.90
    },
    {
        id: 6,
        name: 'Chicken Burger',
        description: 'Peito de frango grelhado, queijo suíço, alface americana, tomate e maionese temperada.',
        image: 'https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-lead-667b185b5c64f.jpg?crop=0.9995509654243376xw:1xh;center,top&resize=1200:*',
        price: 26.90
    }
    ]

    const Hamburgueria: React.FC = () => {
    return (
        <>
        <Header />
        <BannerContainer>
            <BannerImage 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=400&fit=crop" 
            alt="A Hamburgueria do Bairro"
            />
            <Container>
            <BannerInfo>
                <RestaurantType>Hambúrguer</RestaurantType>
                <RestaurantName>A Hamburgueria do Bairro</RestaurantName>
            </BannerInfo>
            </Container>
        </BannerContainer>

        <MenuContainer>
            <Container>
            <MenuGrid>
                {hamburgueriaMenu.map(item => (
                <MenuCard key={item.id} item={item} onClick={() => {}} />
                ))}
            </MenuGrid>
            </Container>
        </MenuContainer>

        <Footer />
        </>
    )
    }

    export default Hamburgueria
