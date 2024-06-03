import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from  "./contexts/AuthContext"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Novo from "./pages/Novo";
import Editar from "./pages/Editar";
import Remover from "./pages/Remover";
import Layout from "./components/Layout";

export default function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user.logado ? (
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/novo" element={<Novo />} />
              <Route path="/editar/:id" element={<Editar />} />
              <Route path="/remover/:id" element={<Remover />} />
              <Route path="/perfil/:id" element={<Perfil />} />
            </Route>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          <Route path="*" element={<p>Isso não existe</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

