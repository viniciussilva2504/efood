import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  min-height: 400px;
`

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ffebd9;
  border-top: 4px solid #e66767;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`

const LoadingText = styled.p`
  color: #e66767;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`

interface LoadingProps {
  message?: string
}

const Loading: React.FC<LoadingProps> = ({ message = 'Carregando...' }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  )
}

export default Loading
