/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthContextProvider(props) {
  const [user, setUser] = useState({email: null, logado:false});

  function login(email, senha) {
    if (email === "jose@email.com" && senha === "abc123") {
      setUser({ email, logado: true });
    }
  }

  function logout() {
    setUser({ email: null, logado: false });
  }

  const contexto = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };