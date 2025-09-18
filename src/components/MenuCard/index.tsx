    import React from 'react'
    import { Card, MenuImage, MenuInfo, MenuTitle, MenuDescription, MenuPrice, AddButton } from './styles'
    import { MenuItem } from '../../pages/Restaurant'

    interface MenuCardProps {
    menuItem: MenuItem
    }

    const MenuCard: React.FC<MenuCardProps> = ({ menuItem }) => {
    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        })
    }

    return (
        <Card>
        <MenuImage src={menuItem.image} alt={menuItem.name} />
        <MenuInfo>
            <MenuTitle>{menuItem.name}</MenuTitle>
            <MenuDescription>{menuItem.description}</MenuDescription>
            <MenuPrice>{formatPrice(menuItem.price)}</MenuPrice>
            <AddButton>Adicionar ao carrinho</AddButton>
        </MenuInfo>
        </Card>
    )
    }

    export default MenuCard
