import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 47px;
`

export const HomeContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 47px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 40px 24px;
    gap: 40px;
    justify-content: center;
  }
`

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0;
`

export const HomeTitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
`

export const HomeTitleWhite = styled.span`
  color: ${({ theme }) => theme.colors.white};
  display: block;
`

export const HomeDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin-top: 24px;
  margin-bottom: 32px;
`

export const ButtonWrapper = styled.div`
  width: 177px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
  }
`

export const HomeRight = styled.div`
  flex-shrink: 0;

  img {
    width: 563px;
    height: 366px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
      width: 100%;
      height: auto;
    }
  }
`
