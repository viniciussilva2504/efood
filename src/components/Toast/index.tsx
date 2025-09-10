import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

const ToastContainer = styled.div<{ isVisible: boolean; isExiting: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  animation: ${props => 
    props.isExiting 
      ? slideOut 
      : props.isVisible 
        ? slideIn 
        : 'none'
  } 0.3s ease-out forwards;
`

const ToastIcon = styled.div`
  font-size: 24px;
`

const ToastContent = styled.div`
  flex: 1;
`

const ToastTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
`

const ToastMessage = styled.div`
  font-size: 12px;
  opacity: 0.9;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
  }
`

interface ToastProps {
  message: string
  title?: string
  duration?: number
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, title = 'Sucesso!', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    <ToastContainer isVisible={isVisible} isExiting={isExiting}>
      <ToastIcon>✅</ToastIcon>
      <ToastContent>
        <ToastTitle>{title}</ToastTitle>
        <ToastMessage>{message}</ToastMessage>
      </ToastContent>
      <CloseButton onClick={handleClose}>×</CloseButton>
    </ToastContainer>
  )
}

export default Toast
