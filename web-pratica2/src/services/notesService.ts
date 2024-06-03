import { useUserStorage } from '../store/useUserStorage'
import { INote } from '../types'
import { del, get, patch, post } from './api/axiosInstance'


export const useNotesServices = () => {
  const { user } = useUserStorage()

  const validateAuth = () => {
    if (!user?.id) {
      throw new Error("Você precisa estar logado para acessar as notas!")
    }
  }

  const getNotes = async (): Promise<INote[]> => {
    validateAuth()

    const response = await get<INote[]>(`/notes?userId=${user?.id}`)

    return response.data
  }

  const addNote = async ({ content, fixed = false }: Omit<INote, 'id' | 'userId'>): Promise<INote> => {
    validateAuth()

    if (!content) {
      throw new Error("Nenhum conteudo inserido na nota")
    }

    const newNote = {
      content,
      fixed,
      userId: user?.id
    }

    const response = await post<INote>('/notes', newNote)

    return response.data
  }

  const removeNote = async ({ noteId }: { noteId: number }): Promise<boolean> => {
    validateAuth()

    if (!noteId) {
      throw new Error("Nenhum id encontrado para a nota em questão")
    }

    const response = await del(`/notes/${noteId}`)

    return response.data
  }

  const updateNote = async ({ noteId, content, fixed }: { noteId: number, content: number, fixed: boolean }) => {
    validateAuth()

    if (!noteId) {
      throw new Error("Nenhum id encontrado para a nota em questão")
    }
    if (!content) {
      throw new Error("Nenhum conteudo encontrado para a nota em questão")
    }

    const response = await patch(`/notes/${noteId}`, { content, fixed })

    return response.data
  }

  return {
    getNotes,
    addNote,
    removeNote,
    updateNote
  }
}
