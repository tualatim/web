import { useState } from 'react';
import { LoginContainer, FormContainer, Title, Form } from './styles'
import { toast } from 'react-toastify';
import { useAuthService } from '../../services';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../navigation/CONSTANTS';

interface IFields {
  email: string
  password: string
}

const INITIAL_FIELDS: IFields = {
  email: '',
  password: ''
}

export const Login = () => {
  const [fields, setFields] = useState<IFields>(INITIAL_FIELDS)
  const auth = useAuthService()
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()

      const email = fields.email?.trim() ?? ""
      const password = fields.password?.trim() ?? ""

      if (!email.length) {
        throw new Error("Preencha o campo de email!")
      }

      if (!password.length) {
        throw new Error("Preencha o campo de senha!")
      }

      await auth.login({ email, password })

      setFields(INITIAL_FIELDS)
    } catch (err: any) {
      toast.error(err.message ?? "Ocorreu um erro inesperado. Tente novamente mais tarde.")
    }
  }

  const handleCreateNewAccount = () => {
    navigate(RoutesEnum.SIGNIN)
  }

  return (
    <LoginContainer>
      <FormContainer >
        <Title id="title">Login</Title>
        <Form id="login-form" onSubmit={handleLogin}>
          <input
            value={fields.email}
            onChange={(e) => { setFields(old => ({ ...old, email: e.target.value })) }}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required />
          <input
            value={fields.password}
            onChange={(e) => { setFields(old => ({ ...old, password: e.target.value })) }}
            type="password"
            name="password"
            placeholder="Senha"
            autoComplete="current-password"
            required />

          <input
            type="submit"
            value="Login" />
        </Form>
        <div id="create-new-account" onClick={handleCreateNewAccount} className="text-button">Criar nova conta</div>
      </FormContainer>
    </LoginContainer>
  )
}
