import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;
  background-color: #fff8f2;
`

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`