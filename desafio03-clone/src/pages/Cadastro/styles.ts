import styled from 'styled-components'

export const CadastroContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 47px;
`

export const CadastroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 47px);
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 40px 24px;
    gap: 40px;
  }
`

export const CadastroLeft = styled.div`
  flex: 1;
  padding-top: 94px;
  max-width: 388px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 40px;
    max-width: 100%;
  }
`

export const LeftTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
`

export const CadastroRight = styled.div`
  flex-shrink: 0;
  width: 368px;
  padding-top: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding-top: 0;
  }
`

export const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
`

export const FormSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TermsText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;
  margin-top: 8px;
`

export const LoginLink = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-top: 8px;

  span.white {
    color: ${({ theme }) => theme.colors.white};
  }

  span.green {
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
