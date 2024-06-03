import { useNavigate } from 'react-router-dom'
import { SignInContainer, FormContainer, Title, Form } from './styles'
import { RoutesEnum } from '../../navigation/CONSTANTS'
import { useState } from 'react'
import { useAuthService } from '../../services'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils'

interface IFields {
  name: string
  email: string
  password: string
}

const INITIAL_FIELDS: IFields = {
  name: '',
  email: '',
  password: ''
}

export const Signin = () => {
  const [fields, setFields] = useState<IFields>(INITIAL_FIELDS)

  const navigate = useNavigate()
  const auth = useAuthService()

  const validateFields = ({ name, email, password }: IFields) => {

    if (!name.length) {
      throw new Error("Preencha o campo de nome!")
    }

    if (!email.length) {
      throw new Error("Preencha o campo de email!")
    }

    if (!validateEmail(email)) {
      throw new Error("Insira um email valido!")
    }

    if (!password.length) {
      throw new Error("Preencha o campo de senha!")
    }

    if (password.length < 5) {
      throw new Error("A senha deve ter no minimo 5 digitos!")
    }
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()

      const name = fields.name?.trim() ?? ""
      const email = fields.email?.trim() ?? ""
      const password = fields.password?.trim() ?? ""

      validateFields({ name, email, password })

      await auth.signIn({ name, email, password })

      setFields(INITIAL_FIELDS)
    } catch (err: any) {
      toast.error(err.message ?? "Ocorreu um erro inesperado. Tente novamente mais tarde.")
    }
  }

  const handleGoLogin = () => {
    navigate(RoutesEnum.LOGIN)
  }

  return (
    <SignInContainer>
      <FormContainer>
        <Title id="title">Sign in</Title>
        <Form id="login-form" onSubmit={handleSignIn}>
          <input
            value={fields.name}
            onChange={(e) => { setFields(old => ({ ...old, name: e.target.value })) }}
            type="text"
            name="name"
            placeholder="Nome"
            autoComplete="name"
            required />
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
            required />

          <input
            type="submit"
            value="Criar Conta" />
        </Form>
        <div id="login-redirect" onClick={handleGoLogin} className="text-button">Fazer Login</div>
      </FormContainer>
    </SignInContainer>
  )
}
