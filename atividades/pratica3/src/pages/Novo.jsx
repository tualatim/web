import { useState, useContext, useNavigate } from "react"; 
import ContatosContext from "../contexts/ContatosContext";

export default function Novo() {
    

    const [nome, setNome] = useState({});
    const [telefone, setTelefone] = useState({});
    const [erroNome, setErroNome] = useState({});        
    const [erroTelefone, setErroTelefone] = useState({});
    const {incluirContato} = useContext(ContatosContext)
    const navigate = useNavigate();

    function handleSubmit(){
        //const novo = { nome, telefone };

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

        const novo = { nome, telefone };
        incluirContato(novo);
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
              {erroTelefone && <p className="erro">{erroTelefone}</p>}
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
        </form>
        </>
    );
}
