import styled from 'styled-components'

export const SkeletonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 32px 0;
`

export const SkeletonItem = styled.div`
  background: transparent;
  width: 320px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
