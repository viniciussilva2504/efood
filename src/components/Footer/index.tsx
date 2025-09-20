import { ContainerFooter, Logo, ListLogos, TextFooter } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Logo src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Efood" />
    <ListLogos>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt="Instagram" />
        </a>
      </li>
      <li id="twitter">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/twitter.png`} alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/fb.png`} alt="facebook" />
        </a>
      </li>
    </ListLogos>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </ContainerFooter>
)

export default Footer
