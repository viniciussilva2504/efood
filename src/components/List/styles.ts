import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
  }

  @media (max-width: 600px) {
    padding: 0 4px;
    row-gap: 24px;
  }
`
