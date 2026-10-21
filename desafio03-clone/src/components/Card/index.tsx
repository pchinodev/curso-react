import { AiFillHeart } from 'react-icons/ai'
import cardBanner from '../../assets/card-banner.png'
import avatarCard from '../../assets/avatar-card.png'
import {
  CardWrapper,
  CardBanner,
  CardBody,
  CardAuthor,
  AuthorInfo,
  AuthorName,
  AuthorTime,
  CardTitle,
  CardDescription,
  CardTags,
  CardFooter,
} from './styles'

interface CardProps {
  authorName: string
  time: string
  title: string
  description: string
  tags: string
  likes: number
}

export function Card({ authorName, time, title, description, tags, likes }: CardProps) {
  return (
    <CardWrapper>
      <CardBanner>
        <img src={cardBanner} alt={title} />
      </CardBanner>
      <CardBody>
        <CardAuthor>
          <img src={avatarCard} alt={authorName} />
          <AuthorInfo>
            <AuthorName>{authorName}</AuthorName>
            <AuthorTime>{time}</AuthorTime>
          </AuthorInfo>
        </CardAuthor>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description} <span className="ver-mais">Ver Mais</span>
        </CardDescription>
        <CardTags>{tags}</CardTags>
        <CardFooter>
          <AiFillHeart color="#e4105d" size={16} />
          <span>{likes}</span>
        </CardFooter>
      </CardBody>
    </CardWrapper>
  )
}
