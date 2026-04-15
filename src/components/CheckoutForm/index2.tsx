import React, { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import {
  CheckoutContainer,
  CheckoutHeader,
  BackButton,
  CheckoutTitle,
  CheckoutForm as Form,
  FormSection,
  SectionTitle,
  FormGroup,
  Label,
  Input,
  ConfirmButton,
  OrderSummary,
  SummaryItem,
  TotalRow
} from './styles'

interface CheckoutFormProps {
  onBack: () => void
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack }) => {
  const { state, clearCart } = useCart()
  const [step, setStep] = useState<'delivery' | 'payment' | 'confirmation'>('delivery')
  
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirmation')
  }

  const handleFinalizeOrder = () => {
    clearCart()
    onBack()
  }

  const renderDeliveryForm = () => (
    <Form onSubmit={handleDeliverySubmit}>
      <FormSection>
        <SectionTitle>Entrega</SectionTitle>
        
        <FormGroup>
          <Label htmlFor="name">Quem irá receber</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Endereço completo</Label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormGroup>

        <ConfirmButton type="submit">
          Continuar com o pagamento
        </ConfirmButton>
      </FormSection>
    </Form>
  )

  const renderPaymentForm = () => (
    <Form onSubmit={handlePaymentSubmit}>
      <FormSection>
        <SectionTitle>Pagamento - Valor a pagar: {formatPrice(state.total)}</SectionTitle>
        
        <FormGroup>
          <Label htmlFor="cardName">Nome no cartão</Label>
          <Input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="cardNumber">Número do cartão</Label>
          <Input
            type="text"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </FormGroup>

        <ConfirmButton type="submit">
          Finalizar pagamento
        </ConfirmButton>
      </FormSection>
    </Form>
  )

  const renderConfirmation = () => (
    <FormSection>
      <SectionTitle>Order placed - #123456</SectionTitle>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        We are happy to inform you that your order is already being prepared and will soon be delivered to the provided address.
      </p>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        Please note that our couriers are not authorized to charge any extra fees.
      </p>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        Remember the importance of sanitizing your hands after receiving your order, ensuring your safety and well-being during your meal.
      </p>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        <strong>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</strong>
      </p>

      <ConfirmButton onClick={handleFinalizeOrder}>
        Concluir
      </ConfirmButton>
    </FormSection>
  )

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <BackButton onClick={step === 'delivery' ? onBack : () => setStep(step === 'payment' ? 'delivery' : 'payment')}>
          ← Voltar
        </BackButton>
        <CheckoutTitle>
          {step === 'delivery' && 'Dados de Entrega'}
          {step === 'payment' && 'Pagamento'}
          {step === 'confirmation' && 'Pedido Confirmado'}
        </CheckoutTitle>
      </CheckoutHeader>

      {step === 'delivery' && renderDeliveryForm()}
      {step === 'payment' && renderPaymentForm()}
      {step === 'confirmation' && renderConfirmation()}

      {(step === 'delivery' || step === 'payment') && (
        <OrderSummary>
          {state.items.map(item => (
            <SummaryItem key={item.id}>
              <span>{item.quantity}x {item.nome}</span>
              <span>{formatPrice(item.preco * item.quantity)}</span>
            </SummaryItem>
          ))}
          <TotalRow>
            <strong>Total: {formatPrice(state.total)}</strong>
          </TotalRow>
        </OrderSummary>
      )}
    </CheckoutContainer>
  )
}

export default CheckoutForm
