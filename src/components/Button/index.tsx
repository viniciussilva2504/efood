
import React from 'react'
import { Botao } from './styles'

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => <Botao tabIndex={0}>{children}</Botao>

export default Button
