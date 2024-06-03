import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContatoContext } from "../contexts/ContatoContext";

export default function Editar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const { alterarContato, consultarContato } = useContext(ContatoContext);

  async function handleSubmit(event) {
    event.preventDefault();
    await alterarContato({ id, nome, telefone });
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
      <h1>Editar Contato</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          name="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
        <input type="submit" value="Salvar" />
      </form>
    </>
  );
}