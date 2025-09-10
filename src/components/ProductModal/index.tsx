import React, { useState } from 'react'
import { MenuItem } from '../../pages/Restaurant'
import { useCart } from '../../contexts/CartContext'
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductServes,
  ProductPrice,
  ButtonContainer,
  AddToCartButton,
  CloseButton
} from './styles'

interface ProductModalProps {
  product: MenuItem | null
  isOpen: boolean
  onClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addItem, toggleCart } = useCart()

  if (!isOpen || !product) return null

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const handleAddToCart = () => {
    addItem(product)
    onClose()
    toggleCart()
  }

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalContent>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductServes>Serve: de 2 a 3 pessoas</ProductServes>
            <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            <ButtonContainer>
              <AddToCartButton onClick={handleAddToCart}>
                Adicionar ao carrinho - {formatPrice(product.price)}
              </AddToCartButton>
            </ButtonContainer>
          </ProductInfo>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default ProductModal
