import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`

export const CardBanner = styled.div`
  width: 100%;
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 10px 12px 14px;
  min-height: 160px;
`

export const CardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`

export const AuthorTime = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;

  span.ver-mais {
    font-weight: 700;
    cursor: pointer;
  }
`

export const CardTags = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.whiteTransparent};
  margin-bottom: 8px;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`
