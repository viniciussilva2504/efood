import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 16px;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #ffebd9;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

export const CheckoutTitle = styled.h3`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 900;
  margin: 0;
`

export const CheckoutForm = styled.form`
  flex: 1;
  overflow-y: auto;
`

export const FormSection = styled.div`
  color: #ffebd9;
`

export const SectionTitle = styled.h4`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 16px 0;
`

export const FormGroup = styled.div`
  margin-bottom: 8px;
  flex: 1;
`

export const Label = styled.label`
  display: block;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  background-color: #ffebd9;
  color: #4b4b4b;
  font-size: 14px;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(230, 103, 103, 0.5);
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 24px;
  
  &:hover {
    background-color: #f5d7b3;
  }
`

export const OrderSummary = styled.div`
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #ffebd9;
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  margin-bottom: 8px;
`

export const TotalRow = styled.div`
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;
  padding-top: 8px;
  border-top: 1px solid #ffebd9;
`
