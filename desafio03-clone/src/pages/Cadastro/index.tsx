import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  CadastroContainer,
  CadastroContent,
  CadastroLeft,
  LeftTitle,
  CadastroRight,
  FormTitle,
  FormSubtitle,
  Form,
  TermsText,
  LoginLink,
} from './styles'

interface CadastroFormData {
  nome: string
  email: string
  senha: string
}

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  senha: yup.string().min(3, 'Mínimo 3 caracteres').required('Senha obrigatória'),
})

export function Cadastro() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: CadastroFormData) => {
    console.log(data)
    navigate('/feed')
  }

  return (
    <CadastroContainer>
      <Header />
      <CadastroContent>
        <CadastroLeft>
          <LeftTitle>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </LeftTitle>
        </CadastroLeft>
        <CadastroRight>
          <FormTitle>Comece agora grátis</FormTitle>
          <FormSubtitle>Crie sua conta e make the change._</FormSubtitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input<CadastroFormData>
              name="nome"
              control={control}
              placeholder="Nome completo"
              type="text"
              leftIcon={<MdPerson size={16} color="white" />}
              errorMessage={errors.nome?.message}
            />
            <Input<CadastroFormData>
              name="email"
              control={control}
              placeholder="E-mail"
              type="email"
              leftIcon={<MdEmail size={16} color="white" />}
              errorMessage={errors.email?.message}
            />
            <Input<CadastroFormData>
              name="senha"
              control={control}
              placeholder="Password"
              type="password"
              leftIcon={<MdLock size={16} color="white" />}
              errorMessage={errors.senha?.message}
            />
            <Button title="Criar minha conta" type="submit" fullWidth />
            <TermsText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
              Privacidade e os Termos de Uso da DIO.
            </TermsText>
            <LoginLink>
              <span className="white">Já tenho conta.</span>
              <span className="green" onClick={() => navigate('/login')}>
                {' '}
                Fazer login
              </span>
            </LoginLink>
          </Form>
        </CadastroRight>
      </CadastroContent>
    </CadastroContainer>
  )
}
