import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  position: relative;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  height: 217px;
  overflow: hidden;
`

export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  text-transform: uppercase;
`

export const InfoContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const RestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
  margin: 0;
`

export const RestaurantRating = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 21px;
    height: 21px;
  }
`

export const RestaurantDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  margin: 0 0 16px 0;
  flex-grow: 1;
`

export const ActionButton = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #d45555;
  }
`