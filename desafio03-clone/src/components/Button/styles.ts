import styled, { css } from 'styled-components'

interface ButtonWrapperProps {
  $variant?: 'primary' | 'secondary'
  $fullWidth?: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  height: 41px;
  border-radius: 27px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &::before {
    content: '';
    position: absolute;
    inset: 4px 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 27px;
  }

  span {
    position: relative;
    z-index: 1;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.openSans};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }

  &:hover::before {
    opacity: 0.9;
  }

  &:active::before {
    opacity: 0.8;
  }
`
