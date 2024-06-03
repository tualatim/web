import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContatoContext } from "../contexts/ContatoContext";

export default function Novo(){
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const {inserirContato} = useContext(ContatoContext);

    async function handleSubmit(event){
        event.preventDefault();

        await inserirContato({nome, telefone})
        navigate("/");
    }

    return (
        <> 
        <h1>Novo Contato</h1>
        <form onSubmit={handleSubmit}>
            <input name="nome" placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
            <input name="telefone" placeholder="Telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)}/>
            <input name="submit" value="Salvar"/>
        </form>
        </>
    )
}

