import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { INote } from '../../../types'
import { faThumbTack, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { useNotesServices } from '../../../services'
import { toast } from 'react-toastify'
import debounce from 'lodash.debounce'

interface INoteProps extends INote {
  fetchNotes: () => Promise<void>
}

const SECOND = 1000
const DEBOUNCE_TIME = 1 * SECOND

export const Note = ({ content: initialContent, fixed: initialFixed, id, fetchNotes }: INoteProps) => {
  const [content, setContent] = useState<string>(initialContent)
  const [isFixed, setIsFixed] = useState<boolean>(initialFixed)

  const { removeNote, updateNote } = useNotesServices()

  useEffect(() => {
    if (!content) return

    const hasContentChanged = content !== initialContent
    const hasFixedChanged = isFixed !== initialFixed

    if (!hasContentChanged && !hasFixedChanged) return

    handleUpdateNote({ content, fixed: isFixed })
  }, [content, isFixed])

  const handleFixNote = () => {
    setIsFixed(old => !old)
  }

  const handleUpdateNote = useCallback(
    debounce(async ({ content, fixed }) => {
      try {
        await updateNote({ noteId: id, content, fixed })
        toast.info("Nota atualizada com sucesso")
      } catch (err: any) {
        toast.error(err.message ?? "Não foi possivel salvar as alterações da nota. Tente novamente mais tarde.")
      }
    }, DEBOUNCE_TIME)
    , [])

  const deleteNote = async () => {
    try {
      await removeNote({ noteId: id })
      toast.success("Nota removida com sucesso")
      fetchNotes()
    } catch (err: any) {
      toast.error(err.message ?? "Houve um erro ao remover a nota. Tente novamente mais tarde")
    }
  }

  return (
    <div className={`note ${isFixed && "fixed"}`}>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder='Adicione algum texto'
      />
      <div className='note-nav pin'>
        <FontAwesomeIcon onClick={handleFixNote} icon={faThumbTack} size="1x" />
      </div>
      <div className='note-nav xclose'>
        <FontAwesomeIcon onClick={deleteNote} icon={faXmark} size="1x" />
      </div>
    </div>
  )
}
