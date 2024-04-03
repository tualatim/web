import { show_toast } from '../../../components/toast/main.js';
import { add_user } from '../../../utils/users.js';
import { handle_login_redirect } from '../main.js';

export const handle_signin = event => {
  event.preventDefault();

  const data = new FormData(event.target);
  const [
    [_name, name],
    [_email, email],
    [_password, password]
  ] = [...data.entries()];

  add_user({ name, email, password })

  const form = document.querySelector("#login-form")
  form.reset()

  show_toast({
    title: "Indo",
    description: "Usuário criado com sucesso",
    severity: 'success'
  })

  setTimeout(() => {
    handle_login_redirect()
  }, 3000)
}
