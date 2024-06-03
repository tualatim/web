import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IUser } from '../types'

interface IUserStore {
  user?: IUser
  setUser: (user?: IUser) => void
}

export const useUserStorage = create<IUserStore>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: newUser => set(() => ({ user: newUser }))
    }),
    {
      name: "todo:master:data",
      getStorage: () => localStorage
    }
  )
)
