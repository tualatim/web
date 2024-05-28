import React, { useState } from 'react';
//import { get_users } from '../utils/users';
import { useNavigate } from 'react-router-dom';
//import Toast from '../components/Toast';
import from 

const Login = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handle_login = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');

    const users = get_users();
    const user = users.find(el => el.email === email && el.password === password);

    if (!user) {
      setMessage({ title: "Error", description: "Email ou Senha Inválidos", severity: 'error' });
      return;
    }

    setMessage({ title: "Indo", description: "Login realizado com sucesso", severity: 'success' });
    setTimeout(() => {
      navigate('/notes');
    }, 2000);
  };

  return (
    <main>
      <h1 id="title">Login</h1>
      <form id="login-form" onSubmit={handle_login}>
        <input type="email" name="email" placeholder="Email" autoComplete="email" required />
        <input type="password" name="password" placeholder="Senha" autoComplete="current-password" required />
        <input type="submit" value="Login" />
      </form>
      <div id="create-new-account" className="text-button" onClick={() => navigate('/signin')}>Criar nova conta</div>
      {message && <Toast message={message} />}
    </main>
  );
};

export default Login;
