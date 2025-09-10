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
  FormRow,
  ConfirmButton,
  OrderSummary,
  SummaryItem,
  TotalRow
} from './styles'

interface CheckoutFormProps {
  onBack: () => void
}

interface DeliveryData {
  name: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

interface PaymentData {
  cardName: string
  cardNumber: string
  cvv: string
  expirationMonth: string
  expirationYear: string
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack }) => {
  const { state, clearCart } = useCart()
  const [step, setStep] = useState<'delivery' | 'payment' | 'confirmation'>('delivery')
  
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })
  
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expirationMonth: '',
    expirationYear: ''
  })

  const handleDeliveryChange = (field: keyof DeliveryData, value: string) => {
    setDeliveryData(prev => ({ ...prev, [field]: value }))
  }

  const handlePaymentChange = (field: keyof PaymentData, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }))
  }

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
            value={deliveryData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({...deliveryData, name: e.target.value})}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Endereço</Label>
          <Input
            type="text"
            id="address"
            value={deliveryData.address}
            onChange={(e) => setDeliveryData({...deliveryData, address: e.target.value})}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">Cidade</Label>
          <Input
            type="text"
            id="city"
            value={deliveryData.city}
            onChange={(e) => setDeliveryData({...deliveryData, city: e.target.value})}
            required
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              type="text"
              id="zipCode"
              value={deliveryData.zipCode}
              onChange={(e) => setDeliveryData({...deliveryData, zipCode: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="number">Número</Label>
            <Input
              type="text"
              id="number"
              value={deliveryData.number}
              onChange={(e) => setDeliveryData({...deliveryData, number: e.target.value})}
              required
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label htmlFor="complement">Complemento (opcional)</Label>
          <Input
            type="text"
            id="complement"
            value={deliveryData.complement}
            onChange={(e) => setDeliveryData({...deliveryData, complement: e.target.value})}
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
            value={paymentData.cardName}
            onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
            required
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label htmlFor="cardNumber">Número do cartão</Label>
            <Input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentData.cardNumber}
              onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              type="text"
              id="cvv"
              placeholder="123"
              value={paymentData.cvv}
              onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
              required
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label htmlFor="expirationMonth">Mês de vencimento</Label>
            <Input
              type="text"
              id="expirationMonth"
              placeholder="MM"
              value={paymentData.expirationMonth}
              onChange={(e) => setPaymentData({...paymentData, expirationMonth: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="expirationYear">Ano de vencimento</Label>
            <Input
              type="text"
              id="expirationYear"
              placeholder="AAAA"
              value={paymentData.expirationYear}
              onChange={(e) => setPaymentData({...paymentData, expirationYear: e.target.value})}
              required
            />
          </FormGroup>
        </FormRow>

        <ConfirmButton type="submit">
          Finalizar pagamento
        </ConfirmButton>
      </FormSection>
    </Form>
  )

  const renderConfirmation = () => (
    <FormSection>
      <SectionTitle>Pedido realizado - 123456</SectionTitle>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </p>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
      </p>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      
      <p style={{ color: '#ffebd9', fontSize: '14px', lineHeight: '22px', marginBottom: '24px' }}>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
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
              <span>{item.quantity}x {item.name}</span>
              <span>{formatPrice(item.price * item.quantity)}</span>
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
