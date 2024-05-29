import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {

    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleClick(event) {
      event.preventDefault();
        login("jose@email.com", "abc1234");
        navigate("/")
    }

    if (user.logado) {
      navigate("/");
    }  

  return (
    <>
      <p>Welcome to Login page</p>
      <button onClick={handleClick}>Entrar</button>
    </>
  );
}
