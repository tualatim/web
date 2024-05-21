import { BrowserRouter, Routes, Route,  } from "react-router-dom";
//import ContatosContext from "./contexts/ContatosContext";
import Home from "./pages/Home";
import Novo from "./pages/Novo";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";

import "./App.css";


export default function App() {
  
    return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home />} />
              
              <Route path="/novo" element={<Novo/>} />
            </Route> 
            <Route path="*" element={<Error404/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
