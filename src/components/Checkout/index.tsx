import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../store'
import {
  clear,
  close,
  closeOrder,
  closePayment,
  openPayment
} from '../../store/reducers/Cart'

import { usePurchaseMutation } from '../../services/api'
import { formataPreco } from '../../utils/formatters'
import { fetchAddressByCep } from '../../services/viaCep'

import { useAuth } from '../../contexts/AuthContext'
import { saveOrder } from '../../services/supabaseData'
import { useToast } from '../Toast'

import {
  OrderContainer,
  OrderTitle,
  OrderDescription,
  OrderButton,
  OrderRow,
  LabelContainer,
  ErrorMessage
} from './styles'

type PagamentoFormData = {
  cardName: string
  cardNumber: string
  cvv: string
  dueMonth: string
  dueYear: string
}

const Checkout = (): React.JSX.Element => {
  const navigate = useNavigate()
  const { isPayment, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [purchase, purchaseResult] = usePurchaseMutation()
  const { user } = useAuth()
  const { showToast } = useToast()

  const fecharPagamento = () => dispatch(closePayment())
  const fecharPedido = () => dispatch(closeOrder())
  const abrirPagamento = () => dispatch(openPayment())
  const limparPedido = () => dispatch(clear())

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return acc + item.preco * (item.quantidade || 1)
    }, 0)
  }

  const handleCepBlur = async () => {
    const cep = formikEntrega.values.cep.replace(/\D/g, '')
    if (cep.length === 8) {
      const address = await fetchAddressByCep(cep)
      if (address) {
        formikEntrega.setFieldValue('endereco', address.logradouro)
        formikEntrega.setFieldValue('cidade', `${address.localidade} - ${address.uf}`)
        if (address.complemento) {
          formikEntrega.setFieldValue('complemento', address.complemento)
        }
      }
    }
  }

  const FinishOrder = () => {
    // Salvar pedido no Supabase se user estiver logado
    if (user) {
      const orderItems = items.map(item => ({
        nome: item.nome,
        quantidade: item.quantidade || 1,
        preco: item.preco
      }))
      const address = `${formikEntrega.values.endereco}, ${formikEntrega.values.numero} - ${formikEntrega.values.cidade}`
      saveOrder(user.id, '', orderItems, getTotalPrice(), address).catch(() => { /* ignore */ })
    }
    // Fechar todos os modais/abas laterais
    fecharPagamento()
    fecharPedido() 
    dispatch(close())
    limparPedido()
    showToast('Order placed successfully!', 'success')
    navigate('/')
  }

  const formikEntrega = useFormik({
    initialValues: {
      name: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Recipient name is required'),
      endereco: Yup.string().required('Address is required'),
      cidade: Yup.string().required('City is required'),
      cep: Yup.string()
        .required('ZIP code is required')
        .matches(/^[0-9]{8}$/, 'ZIP code must be 8 digits'),
      numero: Yup.string().required('Address number is required'),
      complemento: Yup.string()
    }),
    onSubmit: () => {
      abrirPagamento()
    }
  })

  const formikPagamento = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      dueMonth: '',
      dueYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('Cardholder name is required')
        .min(3, 'Name must be at least 3 characters'),
      cardNumber: Yup.string()
        .required('Card number is required')
        .matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
      cvv: Yup.string()
        .required('CVV is required')
        .matches(/^[0-9]{3}$/, 'CVV must be 3 digits'),
      dueMonth: Yup.string()
        .required('Expiration month is required')
        .matches(
          /^(0[1-9]|1[0-2])$/,
          'Month must be two digits, from 01 to 12 (e.g., 01, 12)'
        ),
      dueYear: Yup.string()
        .required('Expiration year is required')
        .matches(/^[0-9]{4}$/, 'Year must be in YYYY format')
    }),
    onSubmit: (values: PagamentoFormData) => {
      const products = items.map(item => ({
        id: item.id,
        price: item.preco * (item.quantidade || 1)
      }))

      purchase({
        products,
        delivery: {
          receiver: formikEntrega.values.name,
          address: {
            descricao: formikEntrega.values.endereco,
            city: formikEntrega.values.cidade,
            zipcode: formikEntrega.values.cep,
            number: Number(formikEntrega.values.numero),
            complement: formikEntrega.values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.dueMonth),
              year: Number(values.dueYear)
            }
          }
        }
      })
    }
  })

  if (purchaseResult.error) {
    showToast('Error placing order. Please try again later.', 'error')
    return (
      <OrderContainer>
        <OrderTitle>Error placing order</OrderTitle>
        <OrderDescription>
          An error occurred while placing your order. Please try again later.
        </OrderDescription>
        <OrderButton onClick={() => fecharPedido()}>Back</OrderButton>
      </OrderContainer>
    )
  }

  return (
    <OrderContainer>
      {purchaseResult.data && purchaseResult.isSuccess ? (
        <>
          <OrderTitle>Order placed - {('orderId' in (purchaseResult.data as Record<string, unknown>) ? (purchaseResult.data as Record<string, unknown>).orderId as string : 'N/A')}</OrderTitle>
          <OrderDescription>
            We are happy to inform you that your order is already being prepared and will soon be delivered to the provided address.
          </OrderDescription>
          <OrderDescription>
            Please note that our couriers are not authorized to charge any extra fees.
          </OrderDescription>
          <OrderDescription>
            Remember the importance of sanitizing your hands after receiving your order, ensuring your safety and well-being during your meal.
          </OrderDescription>
          <OrderDescription>
            We hope you enjoy a delicious and pleasant dining experience. Bon appétit!
          </OrderDescription>

          <OrderButton className="marginTop" onClick={() => FinishOrder()}>
            Finish
          </OrderButton>
        </>
      ) : (
        <>
          {isPayment ? (
            <form id="paymentForm" onSubmit={formikPagamento.handleSubmit}>
              <OrderTitle>Payment - amount to pay {formataPreco(getTotalPrice())}</OrderTitle>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="cardName">Cardholder name</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formikPagamento.values.cardName}
                    onChange={formikPagamento.handleChange}
                    onBlur={formikPagamento.handleBlur}
                  />
                  {formikPagamento.touched.cardName &&
                    formikPagamento.errors.cardName && (
                      <ErrorMessage>
                        {formikPagamento.errors.cardName}
                      </ErrorMessage>
                    )}
                </LabelContainer>
              </OrderRow>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="cardNumber">Card number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formikPagamento.values.cardNumber}
                    onChange={formikPagamento.handleChange}
                    onBlur={formikPagamento.handleBlur}
                  />
                  {formikPagamento.touched.cardNumber &&
                    formikPagamento.errors.cardNumber && (
                      <ErrorMessage>
                        {formikPagamento.errors.cardNumber}
                      </ErrorMessage>
                    )}
                </LabelContainer>

                <LabelContainer width="86px">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formikPagamento.values.cvv}
                    onChange={formikPagamento.handleChange}
                    onBlur={formikPagamento.handleBlur}
                  />
                  {formikPagamento.touched.cvv &&
                    formikPagamento.errors.cvv && (
                      <ErrorMessage>{formikPagamento.errors.cvv}</ErrorMessage>
                    )}
                </LabelContainer>
              </OrderRow>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="dueMonth">Expiration month</label>
                  <input
                    type="text"
                    id="dueMonth"
                    name="dueMonth"
                    value={formikPagamento.values.dueMonth}
                    onChange={formikPagamento.handleChange}
                    onBlur={formikPagamento.handleBlur}
                  />
                  {formikPagamento.touched.dueMonth &&
                    formikPagamento.errors.dueMonth && (
                      <ErrorMessage>
                        {formikPagamento.errors.dueMonth}
                      </ErrorMessage>
                    )}
                </LabelContainer>

                <LabelContainer>
                  <label htmlFor="dueYear">Expiration year</label>
                  <input
                    type="text"
                    id="dueYear"
                    name="dueYear"
                    value={formikPagamento.values.dueYear}
                    onChange={formikPagamento.handleChange}
                    onBlur={formikPagamento.handleBlur}
                  />
                  {formikPagamento.touched.dueYear &&
                    formikPagamento.errors.dueYear && (
                      <ErrorMessage>
                        {formikPagamento.errors.dueYear}
                      </ErrorMessage>
                    )}
                </LabelContainer>
              </OrderRow>

              <OrderButton className="marginTop" type="submit">
                Finalize payment
              </OrderButton>

              <OrderButton type="button" onClick={fecharPagamento}>
                Back to address editing
              </OrderButton>
            </form>
          ) : (
            <form id="deliveryForm" onSubmit={formikEntrega.handleSubmit}>
              <OrderTitle>Delivery</OrderTitle>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="name">Recipient name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formikEntrega.values.name}
                    onChange={formikEntrega.handleChange}
                    onBlur={formikEntrega.handleBlur}
                  />
                  {formikEntrega.touched.name && formikEntrega.errors.name && (
                    <ErrorMessage>{formikEntrega.errors.name}</ErrorMessage>
                  )}
                </LabelContainer>
              </OrderRow>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="endereco">Address</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={formikEntrega.values.endereco}
                    onChange={formikEntrega.handleChange}
                    onBlur={formikEntrega.handleBlur}
                  />
                  {formikEntrega.touched.endereco &&
                    formikEntrega.errors.endereco && (
                      <ErrorMessage>
                        {formikEntrega.errors.endereco}
                      </ErrorMessage>
                    )}
                </LabelContainer>
              </OrderRow>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="cidade">City</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={formikEntrega.values.cidade}
                    onChange={formikEntrega.handleChange}
                    onBlur={formikEntrega.handleBlur}
                  />
                  {formikEntrega.touched.cidade &&
                    formikEntrega.errors.cidade && (
                      <ErrorMessage>{formikEntrega.errors.cidade}</ErrorMessage>
                    )}
                </LabelContainer>
              </OrderRow>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="cep">ZIP code</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={formikEntrega.values.cep}
                    onChange={formikEntrega.handleChange}
                    onBlur={(e) => {
                      formikEntrega.handleBlur(e)
                      handleCepBlur()
                    }}
                    placeholder="Ex: 01001000"
                  />
                  {formikEntrega.touched.cep && formikEntrega.errors.cep && (
                    <ErrorMessage>{formikEntrega.errors.cep}</ErrorMessage>
                  )}
                </LabelContainer>

                <LabelContainer>
                  <label htmlFor="numero">Number</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={formikEntrega.values.numero}
                    onChange={formikEntrega.handleChange}
                    onBlur={formikEntrega.handleBlur}
                  />
                  {formikEntrega.touched.numero &&
                    formikEntrega.errors.numero && (
                      <ErrorMessage>{formikEntrega.errors.numero}</ErrorMessage>
                    )}
                </LabelContainer>
              </OrderRow>

              <OrderRow>
                <LabelContainer>
                  <label htmlFor="complemento">Complement (optional)</label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={formikEntrega.values.complemento}
                    onChange={formikEntrega.handleChange}
                    onBlur={formikEntrega.handleBlur}
                  />
                </LabelContainer>
              </OrderRow>

              <OrderButton className="marginTop" type="submit">
                Continue to payment
              </OrderButton>
              <OrderButton type="button" onClick={fecharPedido}>
                Back to cart
              </OrderButton>
            </form>
          )}
        </>
      )}
    </OrderContainer>
  )
}

export default Checkout
