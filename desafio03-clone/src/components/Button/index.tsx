import { ButtonWrapper } from './styles'

interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export function Button({ title, variant = 'primary', onClick, type = 'button', fullWidth }: ButtonProps) {
  return (
    <ButtonWrapper $variant={variant} $fullWidth={fullWidth} onClick={onClick} type={type}>
      <span>{title}</span>
    </ButtonWrapper>
  )
}
