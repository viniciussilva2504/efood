import { Imagem, Logo, TextHeader } from './styles'
import logo from '../../assets/images/logo.svg'
import headerimg from '../../assets/images/fundo.png'

type HeaderProps = {
  isRestaurantPage?: boolean
}

const Header = ({ isRestaurantPage }: HeaderProps) => (
  <Imagem style={{ backgroundImage: `url(${headerimg})` }}>
    <Logo src={logo} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </Imagem>
)

export default Header
