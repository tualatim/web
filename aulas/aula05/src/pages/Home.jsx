import { useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { ContatoContext } from "../contexts/ContatoContext";

function Home() {
    const {meusContatos, listarContatos } = useContext(ContatoContext);

    useEffect(() => { 
      listarContatos();
    }, []);

    return (
      <>
      <h1>Home </h1>
      <Link to="/novo">Novo Contato</Link>
      <ul>
        {meusContatos.map((contato, key)=>(
          <li key={key}>
            {contato.nome} - {contato.telefone}
          </li>
        ))}
      </ul>
        <p>Welcome to Home page</p>
      </>
    );
  }
  
  export default Home;