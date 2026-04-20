import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;
  row-gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 24px;
  }

  @media (max-width: 600px) {
    padding: 0 4px;
    row-gap: 16px;
  }
`
