import styled from 'styled-components'

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: #e66767;
  padding: 32px 8px 8px 8px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 300px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const CartTitle = styled.h3`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 900;
  margin: 0;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #ffebd9;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(255, 235, 217, 0.1);
  }
`

export const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
`

export const CartEmpty = styled.div`
  text-align: center;
  color: #ffebd9;
  padding: 40px 0;
  font-size: 16px;
`

export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  background-color: #ffebd9;
  position: relative;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemName = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
  margin: 0;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  color: #e66767;
`

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  span {
    color: #e66767;
    font-weight: bold;
  }
`

export const QuantityButton = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: #d45555;
  }
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e66767;
  font-size: 12px;
  cursor: pointer;
  align-self: flex-start;
  
  &:hover {
    text-decoration: underline;
  }
`

export const CartFooter = styled.div`
  padding-top: 16px;
  border-top: 1px solid #ffebd9;
  margin-top: 16px;
`

export const TotalPrice = styled.div`
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  
  &:hover {
    background-color: #f5d7b3;
  }
`
