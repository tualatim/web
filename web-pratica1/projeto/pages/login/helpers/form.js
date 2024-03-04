import { show_toast } from '../../../components/toast/main.js';
import { get_users } from '../../../utils/users.js';

const NotesPage = '../notes/main.html'

const handle_notes_redirect = () => {
  window.location.replace(NotesPage)
}

export const handle_login = event => {
  try {
    event.preventDefault();

    const data = new FormData(event.target);
    const [
      [_email, email],
      [_password, password]
    ] = [...data.entries()];

    const users = get_users()

    const user = users.find(el => el.email == email && el.password == password)

    if (!user) {
      throw new Error("Email ou Senha Inválidos")
    }

    show_toast({
      title: "Indo",
      description: "Login realizado com sucesso",
      severity: 'success'
    })

    setTimeout(() => {
      handle_notes_redirect()
      const form = document.querySelector("#login-form")
      form.reset()
    }, 2000)
  } catch (err) {
    show_toast({
      title: "Error",
      description: err.message,
      severity: 'error'
    })
  }
}
