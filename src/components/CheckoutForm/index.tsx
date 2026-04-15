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
        <SectionTitle>Delivery</SectionTitle>
        
        <FormGroup>
          <Label htmlFor="name">Recipient name</Label>
          <Input
            type="text"
            id="name"
            value={deliveryData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({...deliveryData, name: e.target.value})}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            value={deliveryData.address}
            onChange={(e) => setDeliveryData({...deliveryData, address: e.target.value})}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">City</Label>
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
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              type="text"
              id="zipCode"
              value={deliveryData.zipCode}
              onChange={(e) => setDeliveryData({...deliveryData, zipCode: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="number">Number</Label>
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
          <Label htmlFor="complement">Complement (optional)</Label>
          <Input
            type="text"
            id="complement"
            value={deliveryData.complement}
            onChange={(e) => setDeliveryData({...deliveryData, complement: e.target.value})}
          />
        </FormGroup>

        <ConfirmButton type="submit">
          Continue to payment
        </ConfirmButton>
      </FormSection>
    </Form>
  )

  const renderPaymentForm = () => (
    <Form onSubmit={handlePaymentSubmit}>
      <FormSection>
        <SectionTitle>Payment - Amount to pay: {formatPrice(state.total)}</SectionTitle>
        
        <FormGroup>
          <Label htmlFor="cardName">Cardholder name</Label>
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
            <Label htmlFor="cardNumber">Card number</Label>
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
            <Label htmlFor="expirationMonth">Expiration month</Label>
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
            <Label htmlFor="expirationYear">Expiration year</Label>
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
          Finalize payment
        </ConfirmButton>
      </FormSection>
    </Form>
  )

  const renderConfirmation = () => (
    <FormSection>
      <SectionTitle>Order placed - 123456</SectionTitle>
      
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
        We hope you enjoy a delicious and pleasant dining experience. Bon appétit!
      </p>

      <ConfirmButton onClick={handleFinalizeOrder}>
        Finish
      </ConfirmButton>
    </FormSection>
  )

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <BackButton onClick={step === 'delivery' ? onBack : () => setStep(step === 'payment' ? 'delivery' : 'payment')}>
          ← Back
        </BackButton>
        <CheckoutTitle>
          {step === 'delivery' && 'Delivery Details'}
          {step === 'payment' && 'Payment'}
          {step === 'confirmation' && 'Order Confirmed'}
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
