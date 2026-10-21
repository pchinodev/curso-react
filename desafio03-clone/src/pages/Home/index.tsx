import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import banner from '../../assets/banner.png'
import {
  HomeContainer,
  HomeContent,
  HomeLeft,
  HomeTitle,
  HomeTitleHighlight,
  HomeTitleWhite,
  HomeDescription,
  ButtonWrapper,
  HomeRight,
} from './styles'

export function Home() {
  const navigate = useNavigate()

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <HomeLeft>
          <HomeTitle>
            <HomeTitleHighlight>Implemente</HomeTitleHighlight>
            <HomeTitleWhite>o seu futuro global agora!</HomeTitleWhite>
          </HomeTitle>
          <HomeDescription>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu
            novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </HomeDescription>
          <ButtonWrapper>
            <Button title="Começar agora" onClick={() => navigate('/login')} fullWidth />
          </ButtonWrapper>
        </HomeLeft>
        <HomeRight>
          <img src={banner} alt="DIO plataforma" />
        </HomeRight>
      </HomeContent>
    </HomeContainer>
  )
}
