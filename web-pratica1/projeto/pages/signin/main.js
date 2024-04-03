import { handle_signin } from './helpers/form.js';

const LoginPage = '../login/main.html'

export const handle_login_redirect = () => {
  window.location.replace(LoginPage)
}

export const Main = () => {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", handle_signin);

  const create_new_account = document.querySelector("#login-redirect")
  create_new_account.addEventListener("click", handle_login_redirect)
}

Main()
