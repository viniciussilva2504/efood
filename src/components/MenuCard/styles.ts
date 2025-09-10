import styled from 'styled-components'

export const Card = styled.div`
  background-color: #e66767;
  padding: 8px;
  color: #ffebd9;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`

export const MenuImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 4px;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5d7b3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`
