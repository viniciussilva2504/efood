import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerRest = styled.div`
  width: 472px;
  border: 1px solid ${cores.rosa};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  margin-bottom: 48px;
  position: relative;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 24px;
    > img {
      height: 140px;
    }
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  max-width: 456px;
  margin-left: 8px;
  margin-bottom: 16px;
  flex-grow: 1;
`

export const Infos = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;

  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  span {
    font-weight: bold;
    display: flex;
    align-items: center;

    img {
      width: 15px;
      height: 15px;
      margin-left: 4px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    h3 {
      font-size: 16px;
    }
  }
`

export const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledButton = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px; /* 100% of height */
  letter-spacing: 0;
  text-align: center;
  margin: 8px;
  border: none;
`
