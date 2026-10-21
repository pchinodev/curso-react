import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import {
  FeedContainer,
  FeedContent,
  FeedLeft,
  FeedTitle,
  CardList,
  FeedRight,
  RankingTitle,
  RankingList,
} from './styles'

const cardsMock = [
  {
    id: 1,
    authorName: 'Pablo Henrique',
    time: 'Há 8 minutos',
    title: 'Projeto para curso de HTML e CSS',
    description: 'Projeto feito no curso de html e css no bootcamp da dio do Global avanade...',
    tags: '#HTML #CSS #Javascript',
    likes: 10,
  },
  {
    id: 2,
    authorName: 'Pablo Henrique',
    time: 'Há 8 minutos',
    title: 'Projeto para curso de HTML e CSS',
    description: 'Projeto feito no curso de html e css no bootcamp da dio do Global avanade...',
    tags: '#HTML #CSS #Javascript',
    likes: 10,
  },
]

const rankingMock = [
  { id: 1, name: 'Pablo Henrique', percentage: 43 },
  { id: 2, name: 'Pablo Henrique', percentage: 60 },
  { id: 3, name: 'Pablo Henrique', percentage: 75 },
  { id: 4, name: 'Pablo Henrique', percentage: 55 },
  { id: 5, name: 'Pablo Henrique', percentage: 35 },
]

export function Feed() {
  return (
    <FeedContainer>
      <Header autenticado />
      <FeedContent>
        <FeedLeft>
          <FeedTitle>Feed</FeedTitle>
          <CardList>
            {cardsMock.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </CardList>
        </FeedLeft>
        <FeedRight>
          <RankingTitle># RANKING 5 TOP DA SEMANA</RankingTitle>
          <RankingList>
            {rankingMock.map((user) => (
              <UserInfo key={user.id} name={user.name} percentage={user.percentage} />
            ))}
          </RankingList>
        </FeedRight>
      </FeedContent>
    </FeedContainer>
  )
}
