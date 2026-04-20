import styled from 'styled-components'

export const cores = {
  begeclaro: '#FFF8F2',
  bege: '#FFEBD9',
  rosa: '#E66767',
  branco: '#FFFFFF'
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1040px) {
    max-width: 98vw;
    padding: 0 8px;
  }

  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0 2px;
  }
`
