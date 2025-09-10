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

    const thaiMenu: MenuItem[] = [
    {
        id: 1,
        name: 'Pad Thai',
        description: 'Macarrão de arroz refogado com camarão, ovo, broto de feijão, cebolinha e molho agridoce.',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=320&h=320&fit=crop',
        price: 34.90
    },
    {
        id: 2,
        name: 'Curry Verde',
        description: 'Curry tailandês com leite de coco, manjericão tailandês, berinjela e sua escolha de proteína.',
        image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/3bcd7900-0f60-4999-926a-ed7aba5c8593/Derivates/58ffc78b-d4af-410b-9c8f-4acc521028ad.jpg',
        price: 38.90
    },
    {
        id: 3,
        name: 'Tom Yum',
        description: 'Sopa picante e azeda com camarão, cogumelos, capim-limão e folhas de lima kaffir.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=320&h=320&fit=crop',
        price: 29.90
    },
    {
        id: 4,
        name: 'Massaman Curry',
        description: 'Curry doce e suave com amendoim, batata, cebola e carne bovina macia.',
        image: 'https://redwoodkitchen.com/wp-content/uploads/2023/02/MassamanTofuCurry.jpg',
        price: 36.90
    },
    {
        id: 5,
        name: 'Mango Sticky Rice',
        description: 'Sobremesa tradicional com arroz doce de coco e manga fresca em fatias.',
        image: 'https://takestwoeggs.com/wp-content/uploads/2021/07/Thai-Mango-Sticky-Rice-Takestwoeggs-Process-Final-sq.jpg',
        price: 18.90
    },
    {
        id: 6,
        name: 'Som Tam',
        description: 'Salada de mamão verde com tomate cereja, vagem, amendoim e molho de peixe.',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=320&h=320&fit=crop',
        price: 24.90
    }
    ]

    const ThaiPalace: React.FC = () => {
    return (
        <>
        <Header />
        <BannerContainer>
            <BannerImage 
            src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200&h=400&fit=crop" 
            alt="Thai Palace"
            />
            <Container>
            <BannerInfo>
                <RestaurantType>Tailandesa</RestaurantType>
                <RestaurantName>Thai Palace</RestaurantName>
            </BannerInfo>
            </Container>
        </BannerContainer>

        <MenuContainer>
            <Container>
            <MenuGrid>
                {thaiMenu.map(item => (
                <MenuCard key={item.id} item={item} onClick={() => {}} />
                ))}
            </MenuGrid>
            </Container>
        </MenuContainer>

        <Footer />
        </>
    )
    }

    export default ThaiPalace
