import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Layout() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/login")
  }

  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/perfil/1">perfil</NavLink></li>
        <li><button onClick={handleClick}>Sair</button></li>
      </ul>
    </nav>
    <main><Outlet /></main>
    </>
  );
}