import styled from 'styled-components'
import { cores } from '../../styles'

export const CartPageContainer = styled.div`
  padding: 32px 0;
  min-height: 80vh;
  background: ${cores.branco};
`

export const CartContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px;
  
  h2 {
    color: ${cores.rosa};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 32px;
    text-align: center;
  }
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: ${cores.bege};
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`

export const ItemPrice = styled.div`
  font-size: 16px;
  color: ${cores.rosa};
  font-weight: bold;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`

export const QuantityButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const Quantity = styled.span`
  background: ${cores.branco};
  color: ${cores.rosa};
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 4px;
  min-width: 40px;
  text-align: center;
`

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 16px;
  padding: 8px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 24px;
    height: 24px;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;

  h2 {
    color: ${cores.rosa};
    font-size: 28px;
    margin-bottom: 16px;
  }

  p {
    color: ${cores.rosa};
    font-size: 16px;
    opacity: 0.7;
    margin-bottom: 32px;
  }
`

export const CartSummary = styled.div`
  background: ${cores.bege};
  margin-top: 32px;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: ${cores.rosa};
  margin-bottom: 24px;
  padding: 16px 0;
  border-top: 2px solid ${cores.rosa};
  border-bottom: 2px solid ${cores.rosa};
`

export const CheckoutButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 16px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const BackToShopButton = styled.button`
  background: ${cores.branco};
  color: ${cores.rosa};
  border: 2px solid ${cores.rosa};
  border-radius: 4px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${cores.rosa};
    color: ${cores.branco};
  }
`