import { handle_login } from './helpers/form.js';

const SignInPage = '../signin/main.html'

const handle_create_new_account = () => {
  window.location.replace(SignInPage)
}

export const Main = () => {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", handle_login);

  const create_new_account = document.querySelector("#create-new-account")
  create_new_account.addEventListener("click", handle_create_new_account)
}

Main()
