import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: #e66767;
  max-width: 1024px;
  width: 90%;
  position: relative;
  padding: 32px;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 16px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 24px;
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

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  margin: 0 0 16px 0;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  margin: 0 0 16px 0;
`

export const ProductServes = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  margin: 0 0 16px 0;
  font-weight: 500;
`

export const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const AddToCartButton = styled.button`
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
