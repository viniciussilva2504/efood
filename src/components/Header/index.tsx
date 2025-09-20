import { useSelector, useDispatch } from 'react-redux'
import { Imagem, Logo, TextHeader, CartLink } from './styles'
import { open } from '../../store/reducers/Cart'
import type { RootReducer } from '../../store'

type HeaderProps = {
  isRestaurantPage?: boolean
}

const Header = ({ isRestaurantPage }: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  
  const getTotalItems = () => {
    return items.reduce((acc, item) => acc + (item.quantidade || 1), 0)
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/fundo.png)` }}>
      <div onClick={openCart} style={{ position: 'absolute', top: '40px', right: '32px', zIndex: 10 }}>
        <CartLink>
          Carrinho ({getTotalItems()})
        </CartLink>
      </div>
      <Logo src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="efood" />
      <TextHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </TextHeader>
    </Imagem>
  )
}

export default Header
