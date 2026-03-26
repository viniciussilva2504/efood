import React, { createContext, useContext, useState, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const ToastContainer = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ToastMessage = styled.div<{ type: 'success' | 'error' }>`
  min-width: 220px;
  padding: 16px 24px;
  border-radius: 8px;
  color: #fff;
  background: ${({ type }) =>
    type === 'success' ? '#27ae60' : '#e74c3c'};
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  animation: ${fadeIn} 0.3s ease;
`

type Toast = { id: number; message: string; type: 'success' | 'error' }

type ToastContextType = {
  showToast: (message: string, type: 'success' | 'error') => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ToastContext = createContext<ToastContextType>({ showToast: () => {} })

export const useToast = () => useContext(ToastContext)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3500)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} type={toast.type} role="alert">
            {toast.message}
          </ToastMessage>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  )
}
