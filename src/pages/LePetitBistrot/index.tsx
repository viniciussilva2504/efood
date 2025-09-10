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

    const bistrotMenu: MenuItem[] = [
    {
        id: 1,
        name: 'Coq au Vin',
        description: 'Frango cozido lentamente em vinho tinto com cogumelos, cebolas e ervas de Provence.',
        image: 'https://static01.nyt.com/images/2023/08/24/multimedia/MC-Coq-Au-Van-ctpm/MC-Coq-Au-Van-ctpm-threeByTwoMediumAt2X.jpg?quality=75&auto=webp',
        price: 52.90
    },
    {
        id: 2,
        name: 'Ratatouille',
        description: 'Refogado tradicional de berinjela, abobrinha, tomate, pimentão e ervas frescas.',
        image: 'https://veganoporquesim.com.br/wp-content/uploads/2022/07/Ratatouille-Tradicional.webp',
        price: 38.90
    },
    {
        id: 3,
        name: 'Bouillabaisse',
        description: 'Sopa provençal de frutos do mar com pescada, camarão, mexilhões e safran.',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=320&h=320&fit=crop',
        price: 68.90
    },
    {
        id: 4,
        name: 'Crème Brûlée',
        description: 'Sobremesa clássica francesa com creme de baunilha e açúcar caramelizado.',
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=320&h=320&fit=crop',
        price: 22.90
    },
    {
        id: 5,
        name: 'Escargot de Bourgogne',
        description: 'Caracóis da Borgonha preparados com manteiga de alho, salsa e vinho branco.',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=320&h=320&fit=crop',
        price: 34.90
    },
    {
        id: 6,
        name: 'Tarte Tatin',
        description: 'Torta de maçã invertida caramelizada, servida morna com sorvete de baunilha.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=320&h=320&fit=crop',
        price: 28.90
    }
    ]

    const LePetitBistrot: React.FC = () => {
    return (
        <>
        <Header />
        <BannerContainer>
            <BannerImage 
            src="https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/10/230521-decoracao-de-bistro-o-que-um-restaurante-frances-deve-ter-825x540.jpg" 
            alt="Le Petit Bistrot"
            />
            <Container>
            <BannerInfo>
                <RestaurantType>Francesa</RestaurantType>
                <RestaurantName>Le Petit Bistrot</RestaurantName>
            </BannerInfo>
            </Container>
        </BannerContainer>

        <MenuContainer>
            <Container>
            <MenuGrid>
                {bistrotMenu.map(item => (
                <MenuCard key={item.id} menuItem={item} />
                ))}
            </MenuGrid>
            </Container>
        </MenuContainer>

        <Footer />
        </>
    )
    }

    export default LePetitBistrot
