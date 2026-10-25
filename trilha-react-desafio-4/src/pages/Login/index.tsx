import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  LoginContainer,
  Column,
  Spacing,
  Title,
  Description,
  DemoCredentials,
  SuccessMessage,
} from "./styles";
import { defaultValues, IFormLogin } from "./types";

const DEMO_CREDENTIALS: IFormLogin = {
  email: "demo@curso.com",
  password: "React123",
};

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const [authenticatedEmail, setAuthenticatedEmail] = useState<string | null>(
    null
  );
  const [authError, setAuthError] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = ({ email, password }: IFormLogin) => {
    const normalizedEmail = email.trim().toLowerCase();
    if (
      normalizedEmail === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password
    ) {
      setAuthError("");
      setAuthenticatedEmail(normalizedEmail);
      return;
    }

    setAuthError("E-mail ou senha incorretos.");
  };

  const onLogout = () => {
    setAuthenticatedEmail(null);
    setAuthError("");
    reset(defaultValues);
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          {authenticatedEmail ? (
            <>
              <Title>Bem-vindo!</Title>
              <Description>Login realizado para {authenticatedEmail}.</Description>
              <SuccessMessage role="status">
                Autenticação de demonstração concluída.
              </SuccessMessage>
              <Spacing />
              <Button title="Sair" onClick={onLogout} />
            </>
          ) : (
            <>
              <Title>Login</Title>
              <Description>Entre com suas credenciais para continuar.</Description>
              <Spacing />
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-label="E-mail"
                  placeholder="E-mail"
                  control={control}
                  errorMessage={errors.email?.message}
                  onChange={() => setAuthError("")}
                />
                <Spacing />
                <Input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-label="Senha"
                  placeholder="Senha"
                  control={control}
                  errorMessage={errors.password?.message}
                  onChange={() => setAuthError("")}
                />
                <Spacing />
                {authError && (
                  <SuccessMessage $error role="alert">
                    {authError}
                  </SuccessMessage>
                )}
                <Button title="Entrar" type="submit" />
              </form>
              <DemoCredentials>
                Acesso de demonstração: {DEMO_CREDENTIALS.email} /{" "}
                {DEMO_CREDENTIALS.password}
              </DemoCredentials>
            </>
          )}
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
