import styled from 'styled-components'

export const Card = styled.div`
  background-color: #e66767;
  padding: 8px;
  color: #ffebd9;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 4px;
  display: block;
`

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  text-align: center;
`

export const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 0;
  color: #ffebd9;
`

export const MenuDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  color: #ffebd9;
`

export const MenuPrice = styled.span`
  font-size: 14px;
  font-weight: 900;
  margin: 8px 0;
  color: #ffebd9;
`

export const AddButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  border-radius: 4px;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: #f5d7b3;
  }
`
