import { useState, useContext} from "react"; 
import { ContatosContext } from "../contexts/ContatosContext";
import {useNavigate} from "react-router-dom";

export default function Novo() {
    
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroNome, setErroNome] = useState("");        
    const [erroTelefone, setErroTelefone] = useState('');
    const {incluirContato} = useContext(ContatosContext)
    

    function handleSubmit(event){
        event.preventDefault();
        console.log(nome, telefone)
        if (!nome) {
            setErroNome('Por favor, insira um nome.');
        } else {
            setErroNome('');
        }

        if (!telefone) {
            setErroTelefone('Por favor, insira um telefone.');
        } else {
            setErroTelefone('');
        }

        const novoContato = { nome, telefone };
        incluirContato(novoContato);
        navigate("/");
    }

    return (
      <>
        <h2>Novo Contato</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            {erroNome && <p className="erro">{erroNome}</p>}
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
            <input type="submit" value="Salvar" />
            {erroTelefone && <p className="erro">{erroTelefone}</p>}
          </div>
        </form>
      </>
    );
}
