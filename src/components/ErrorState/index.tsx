import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  min-height: 400px;
  text-align: center;
`

const ErrorIcon = styled.div`
  font-size: 48px;
  color: #e66767;
  margin-bottom: 16px;
`

const ErrorTitle = styled.h2`
  color: #e66767;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
`

const ErrorMessage = styled.p`
  color: #666;
  font-size: 16px;
  margin: 0 0 24px 0;
  max-width: 400px;
`

const RetryButton = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #d45555;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
}

const ErrorState: React.FC<ErrorStateProps> = ({ 
  title = 'Ops! Algo deu errado', 
  message = 'Não foi possível carregar o conteúdo. Tente novamente.',
  onRetry 
}) => {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Tentar novamente
        </RetryButton>
      )}
    </ErrorContainer>
  )
}

export default ErrorState
