import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`

export const ProgressBarWrapper = styled.div`
  position: relative;
  width: 137px;
  height: 9px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

interface ProgressFillProps {
  $percentage: number
}

export const ProgressFill = styled.div<ProgressFillProps>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 6px;
`
