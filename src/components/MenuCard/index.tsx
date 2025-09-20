    import React from 'react'
    import { Card, MenuImage, MenuInfo, MenuTitle, MenuDescription, MenuPrice, AddButton } from './styles'
    import { CardapioItem } from '../../pages/Home'

    interface MenuCardProps {
    menuItem: CardapioItem
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
        <MenuImage src={menuItem.foto} alt={menuItem.nome} />
        <MenuInfo>
            <MenuTitle>{menuItem.nome}</MenuTitle>
            <MenuDescription>{menuItem.descricao}</MenuDescription>
            <MenuPrice>{formatPrice(menuItem.preco)}</MenuPrice>
            <AddButton>Adicionar ao carrinho</AddButton>
        </MenuInfo>
        </Card>
    )
    }

    export default MenuCard
