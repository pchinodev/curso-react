import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 47px;
  background-color: ${({ theme }) => theme.colors.headerBg};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 24px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const NavLinkBold = styled(NavLink)`
  font-weight: 700;
`

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const MenuButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonMenuBg};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 11px;
  padding: 4px 16px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.openSans};
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.searchBg};
  border-radius: 8px;
  padding: 0 12px;
  height: 30px;
  width: 275px;

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.openSans};
  }
`

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  img.avatar {
    width: 41px;
    height: 41px;
    border-radius: 50%;
    object-fit: cover;
  }

  img.chevron {
    width: 16px;
    height: 16px;
  }
`
