    import React, { createContext, useContext } from 'react'
    import { useToast } from '../hooks/useToast'
    import Toast from '../components/Toast'

    interface ToastContextType {
    showToast: (message: string, title?: string, duration?: number) => void
    }

    const ToastContext = createContext<ToastContextType | undefined>(undefined)

    interface ToastProviderProps {
    children: React.ReactNode
    }

    export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const { toasts, showToast, removeToast } = useToast()

    return (
        <ToastContext.Provider value={{ showToast }}>
        {children}
        {toasts.map(toast => (
            <Toast
            key={toast.id}
            message={toast.message}
            title={toast.title}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
            />
        ))}
        </ToastContext.Provider>
    )
    }

    export const useToastContext = () => {
    const context = useContext(ToastContext)
    if (context === undefined) {
        throw new Error('useToastContext deve ser usado dentro de ToastProvider')
    }
    return context
    }
