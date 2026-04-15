import React from 'react'
import { ContainerFooter, Logo, ListLogos, TextFooter } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Logo src="/images/logo.svg" alt="Efood" />
    <ListLogos>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
      </li>
      <li id="twitter">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/fb.png" alt="facebook" />
        </a>
      </li>
    </ListLogos>
    <TextFooter>
      efood is a platform for promoting establishments. Responsibility for delivery and product quality lies entirely with the contracted establishment.
    </TextFooter>
  </ContainerFooter>
)

export default Footer
