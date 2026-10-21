import { useNavigate } from 'react-router-dom'
import logoDio from '../../assets/logo-dio.svg'
import avatarHeader from '../../assets/avatar-header.png'
import chevronDown from '../../assets/chevron-down.svg'
import iconSearch from '../../assets/icon-search.svg'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
  NavLinkBold,
  AuthButtons,
  MenuButton,
  SearchBar,
  AvatarWrapper,
} from './styles'

interface HeaderProps {
  autenticado?: boolean
}

export function Header({ autenticado = false }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logoDio} alt="DIO" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />

        {autenticado ? (
          <>
            <SearchBar>
              <img src={iconSearch} alt="buscar" />
              <span>BUSCAR</span>
            </SearchBar>
            <Nav>
              <NavLinkBold>Live Code</NavLinkBold>
              <NavLinkBold>Global</NavLinkBold>
            </Nav>
            <AvatarWrapper>
              <img className="avatar" src={avatarHeader} alt="avatar" />
              <img className="chevron" src={chevronDown} alt="menu" />
            </AvatarWrapper>
          </>
        ) : (
          <>
            <Nav>
              <NavLink onClick={() => navigate('/')}>Home</NavLink>
            </Nav>
            <AuthButtons>
              <MenuButton onClick={() => navigate('/login')}>Entrar</MenuButton>
              <MenuButton onClick={() => navigate('/cadastro')}>Cadastrar</MenuButton>
            </AuthButtons>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}
