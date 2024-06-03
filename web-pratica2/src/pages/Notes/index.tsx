import { useEffect, useState } from 'react'
import './index.css'
import { INote } from '../../types'
import { useAuthService, useNotesServices } from '../../services'
import { toast } from 'react-toastify'
import { Note } from './components'

export const Notes = () => {
  const [notes, setNotes] = useState<INote[]>([])

  const [newNoteContent, setNewNoteContent] = useState<string>("")

  const { getNotes, addNote } = useNotesServices()
  const { logout } = useAuthService()

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      setNotes([])
      const notes = await getNotes()

      setNotes(notes)
    } catch (err: any) {
      toast.error(err.message ?? "Não foi possivel capturar as notas. Tente novamente mais tarde")
    }
  }

  const Notes = () => {
    const fixedNotes = notes.filter(({ fixed }) => fixed)
    const nonFixedNotes = notes.filter(({ fixed }) => !fixed)

    const mergedNotes = fixedNotes.concat(nonFixedNotes)

    return (
      <div id="notes-container">
        {mergedNotes.sort((a, b) => Number(b.fixed) - Number(a.fixed)).map(note => (
          <Note {...note} fetchNotes={fetchNotes} />
        ))}
      </div>
    )
  }

  const handleLogout = () => {
    logout()
  }

  const handleNewNote = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      const content = newNoteContent.trim()

      if (!content.length) {
        throw new Error("Insira algum texto para criar a nota.")
      }

      await addNote({
        content: content,
        fixed: false
      })

      toast.success("A nova nota foi criada")

      setNewNoteContent("")
      await fetchNotes()
    } catch (err: any) {
      toast.error(err.message ?? "Não foi possivel criar a nota. Tente novamente mais tarde.")
    }
  }

  return (
    <>
      <header id="search-header">
        <div id="navigation-container">
          <h1>Notes</h1>
          <div id="logout-button" onClick={handleLogout} className="text-button">Logout</div>
        </div>
        <nav id="search-container">
          <form onSubmit={handleNewNote}>
            <input
              value={newNoteContent}
              onChange={e => setNewNoteContent(e.target.value)}
              type="text"
              id="note-content"
              placeholder="Criar uma nota..."
            />
            <button type='submit' id="add-note">+</button>
          </form>
        </nav>

      </header>

      <Notes />
    </>
  )
}
