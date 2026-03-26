import React from 'react'

import { useDispatch } from 'react-redux'
import { formataPreco } from '../../utils/formatters'
import { add } from '../../store/reducers/Cart'
import type { CardapioItem } from '../../pages/Home'
import { useToast } from '../Toast'

import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  photo: string
  name: string
  description: string
  portion: string
  price: number
  id: number
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({
  photo,
  name,
  description,
  portion,
  price,
  id,
  isOpen,
  onClose
}: Props) => {
  const dispatch = useDispatch()
  const { showToast } = useToast()

  const getDescription = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 87) + '...'
    }
    return description
  }

  const addToCart = () => {
    const product: CardapioItem = {
      id,
      nome: name,
      foto: photo,
      descricao: description,
      preco: price,
      porcao: portion,
      quantidade: 1
    }
    dispatch(add(product))
    showToast('Produto adicionado ao carrinho!', 'success')
    onClose()
  }

  return (
    <S.ModalContainer className={isOpen ? 'is-visible' : ''}>
      <S.ModalContent className="container">
        <img src={closeIcon} alt="Fechar" onClick={onClose} />
        <header>
          <img src={photo} alt={name} />
        </header>
        <div>
          <h4>{name}</h4>
          <p>{getDescription(description)}</p>
          <p>Serve: de {portion}</p>
          <S.Button onClick={addToCart}>
            Adicionar ao carrinho - {formataPreco(price)}
          </S.Button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </S.ModalContainer>
  )
}

export default ProductModal
