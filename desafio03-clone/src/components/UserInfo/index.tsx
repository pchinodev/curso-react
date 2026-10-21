import avatarRanking from '../../assets/avatar-ranking.png'
import {
  UserInfoWrapper,
  Avatar,
  UserDetails,
  UserName,
  ProgressBarWrapper,
  ProgressFill,
} from './styles'

interface UserInfoProps {
  name: string
  percentage: number
}

export function UserInfo({ name, percentage }: UserInfoProps) {
  return (
    <UserInfoWrapper>
      <Avatar src={avatarRanking} alt={name} />
      <UserDetails>
        <UserName>{name}</UserName>
        <ProgressBarWrapper>
          <ProgressFill $percentage={percentage} />
        </ProgressBarWrapper>
      </UserDetails>
    </UserInfoWrapper>
  )
}
