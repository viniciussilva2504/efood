    import React from 'react'
    import { Card, MenuImage, MenuInfo, MenuTitle, MenuDescription, MenuPrice, AddButton } from './styles'
    import { MenuItem } from '../../pages/Restaurant'

    interface MenuCardProps {
    item: MenuItem
    onClick: () => void
    }

    const MenuCard: React.FC<MenuCardProps> = ({ item, onClick }) => {
    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        })
    }

    return (
        <Card>
        <MenuImage src={item.image} alt={item.name} />
        <MenuInfo>
            <MenuTitle>{item.name}</MenuTitle>
            <MenuDescription>{item.description}</MenuDescription>
            <MenuPrice>{formatPrice(item.price)}</MenuPrice>
            <AddButton onClick={onClick}>Adicionar ao carrinho</AddButton>
        </MenuInfo>
        </Card>
    )
    }

    export default MenuCard
