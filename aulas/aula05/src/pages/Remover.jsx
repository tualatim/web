import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContatoContext } from "../contexts/ContatoContext";

function Remover() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const { excluirContato, consultarContato } = useContext(ContatoContext);

  async function handleSubmit(event) {
    event.preventDefault();
    await excluirContato(id);
    navigate("/");
  }

  useEffect(() => {
    async function carregaDados() {
      const result = await consultarContato(id);
      setNome(result.nome);
      setTelefone(result.telefone);
    }
    carregaDados();
  }, [consultarContato, id]);

  return (
    <>
      <h1>Remover Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome: </label>
        <span>{nome}</span>
        <label>Telefone: </label>
        <span>{telefone}</span>
        <input type="submit" value="Remover" />
      </form>
    </>
  );
}

export default Remover;