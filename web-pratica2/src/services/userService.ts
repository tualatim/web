import { IUser } from '../types'
import { get, post } from './api/axiosInstance'

export const getUserByEmail = async ({ email }: { email: string }): Promise<IUser> => {
  const response = await get<IUser[]>(`/users?email=${email}&_limit=1`)

  return response.data?.[0]
}

interface IRegisterUserProps {
  name: string
  email: string
  password: string
}

export const registerUser = async ({ name, email, password }: IRegisterUserProps) => {
  const userAlreadyExists = await getUserByEmail({ email })

  if (userAlreadyExists) throw new Error("Usuário já existente")

  const response = await post<IUser[]>('/users', { name, email, password })
  return response
}
