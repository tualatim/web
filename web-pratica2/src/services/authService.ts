import { useNavigate } from 'react-router-dom'
import { useUserStorage } from '../store/useUserStorage'
import { IUser } from '../types'
import { getUserByEmail, registerUser } from './userService'
import { RoutesEnum } from '../navigation/CONSTANTS'
import { toast } from 'react-toastify'

interface ILoginProps {
  email: string
  password: string
}

interface ISignInProps {
  name: string
  email: string
  password: string
}

export const useAuthService = () => {
  const { setUser } = useUserStorage()
  const navigate = useNavigate()

  const login = async ({ email, password }: ILoginProps): Promise<IUser> => {
    const user = await getUserByEmail({ email })

    if (!user || user.password !== password) {
      throw new Error("Email ou Senha Inválidos")
    }

    toast.success("Login realizado com sucesso")

    setUser(user)

    navigate(RoutesEnum.ROOT)

    return user
  }

  const signIn = async ({ name, email, password }: ISignInProps) => {
    const user = await registerUser({ name, email, password })

    if (!user) {
      throw new Error("Não foi possivel criar a sua conta. Tente novamente mais tarde")
    }

    toast.success("Conta criada com sucesso")

    navigate(RoutesEnum.LOGIN)

    return user
  }

  const logout = () => {
    setUser(undefined)
  }

  return {
    login,
    signIn,
    logout
  }
}

