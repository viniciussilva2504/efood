import { useState, useCallback } from 'react'

interface ToastData {
  id: string
  message: string
  title?: string
  duration?: number
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const showToast = useCallback((message: string, title?: string, duration = 3000) => {
    const id = Date.now().toString()
    const newToast: ToastData = { id, message, title, duration }
    
    setToasts(prev => [...prev, newToast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  return {
    toasts,
    showToast,
    removeToast
  }
}
