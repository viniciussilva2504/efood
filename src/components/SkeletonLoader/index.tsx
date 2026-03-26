import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`

export const SkeletonBox = styled.div<{
  width?: string
  height?: string
  radius?: string
}>
  `
  background: #ececec;
  background-image: linear-gradient(90deg, #ececec 0px, #f5f5f5 40px, #ececec 80px);
  background-size: 400px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: ${({ radius }) => radius || '8px'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  margin-bottom: 8px;
`

export default function SkeletonLoader({ width, height, radius, style }: {
  width?: string
  height?: string
  radius?: string
  style?: React.CSSProperties
}) {
  return <SkeletonBox width={width} height={height} radius={radius} style={style} />
}
