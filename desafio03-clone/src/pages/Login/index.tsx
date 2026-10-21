import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MdEmail, MdLock } from 'react-icons/md'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  LoginContainer,
  LoginContent,
  LoginLeft,
  LeftTitle,
  LoginRight,
  FormTitle,
  FormSubtitle,
  Form,
  FormLinks,
  LinkYellow,
  LinkGreen,
} from './styles'

interface LoginFormData {
  email: string
  senha: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  senha: yup.string().min(3, 'Mínimo 3 caracteres').required('Senha obrigatória'),
})

export function Login() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    navigate('/feed')
  }

  return (
    <LoginContainer>
      <Header />
      <LoginContent>
        <LoginLeft>
          <LeftTitle>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </LeftTitle>
        </LoginLeft>
        <LoginRight>
          <FormTitle>Faça seu login</FormTitle>
          <FormSubtitle>Faça seu login e make the change._</FormSubtitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input<LoginFormData>
              name="email"
              control={control}
              placeholder="E-mail"
              type="email"
              leftIcon={<MdEmail size={16} color="white" />}
              errorMessage={errors.email?.message}
            />
            <Input<LoginFormData>
              name="senha"
              control={control}
              placeholder="Password"
              type="password"
              leftIcon={<MdLock size={16} color="white" />}
              errorMessage={errors.senha?.message}
            />
            <Button title="Entrar" type="submit" fullWidth />
            <FormLinks>
              <LinkYellow>Esqueci minha senha</LinkYellow>
              <LinkGreen onClick={() => navigate('/cadastro')}>Criar conta</LinkGreen>
            </FormLinks>
          </Form>
        </LoginRight>
      </LoginContent>
    </LoginContainer>
  )
}
