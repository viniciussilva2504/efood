import { Imagem, Logo, TextHeader } from './styles'

type HeaderProps = {
  isRestaurantPage?: boolean
}

const Header = ({ isRestaurantPage }: HeaderProps) => (
  <Imagem style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/fundo.png)` }}>
    <Logo src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </Imagem>
)

export default Header
