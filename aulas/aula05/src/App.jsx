import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from  "./contexts/AuthContext"; 
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Novo from "./pages/Novo";
import "./App.css";

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

