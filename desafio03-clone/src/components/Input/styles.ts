import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 4px;

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.openSans};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.7;
    }
  }
`

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
`
