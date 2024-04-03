const LoginPage = './pages/login/main.html'

const Main = () => {
  const is_logged = false

  if (!is_logged) {
    window.location.replace(LoginPage)
    return
  }
}

Main()
