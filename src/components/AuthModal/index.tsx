import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import styled from 'styled-components'
import { cores } from '../../styles'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  background: ${cores.rosa};
  color: ${cores.bege};
  padding: 32px;
  border-radius: 0;
  width: 100%;
  max-width: 400px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${cores.bege};
  }
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid ${cores.bege};
  background: ${cores.bege};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;

  &::placeholder {
    color: #a8856e;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 4px;
  background: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SwitchLink = styled.button`
  background: none;
  border: none;
  color: ${cores.bege};
  font-size: 12px;
  cursor: pointer;
  margin-top: 12px;
  text-decoration: underline;
  display: block;
  text-align: center;
  width: 100%;
`

const ErrorText = styled.p`
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.2);
  padding: 8px;
  margin-bottom: 8px;
`

type Props = {
  onClose: () => void
}

const AuthModal = ({ onClose }: Props): React.ReactElement => {
  const { signIn, signUp } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (isLogin) {
      const { error } = await signIn(email, password)
      if (error) {
        setError(error)
      } else {
        onClose()
      }
    } else {
      const { error } = await signUp(email, password, name)
      if (error) {
        setError(error)
      } else {
        setError(null)
        onClose()
      }
    }

    setLoading(false)
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>{isLogin ? 'Entrar na sua conta' : 'Criar conta'}</h2>

        {error && <ErrorText>{error}</ErrorText>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <Button type="submit" disabled={loading}>
            {loading ? 'Aguarde...' : isLogin ? 'Entrar' : 'Criar conta'}
          </Button>
        </form>

        <SwitchLink onClick={() => { setIsLogin(!isLogin); setError(null) }}>
          {isLogin ? 'Não tem conta? Criar agora' : 'Já tem conta? Entrar'}
        </SwitchLink>
      </Modal>
    </Overlay>
  )
}

export default AuthModal
