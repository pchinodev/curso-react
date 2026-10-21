import styled from 'styled-components'

export const FeedContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 47px;
`

export const FeedContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 60px;
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 24px;
  }
`

export const FeedLeft = styled.div`
  flex: 1;
  min-width: 0;
`

export const FeedTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const FeedRight = styled.div`
  flex-shrink: 0;
  width: 280px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const RankingTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.whiteTransparent70};
  margin-bottom: 24px;
`

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
