import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ContatosContext = createContext({ meusContatos: [], 
                                        incluirContato: () => {}
                                    });

export const ContatosContextProvider = (props) => {
  const { contatos, setContatos } = useState([]);

  
  const incluir = (contato) => {
    setContatos([...contatos, contato]);
  }; 
  const contexto = {
    meusContatos: contatos,
    incluirContato: incluir
  };

  ContatosContextProvider.propTypes = {
    children: PropTypes.element.isRequired
  };

  return (
    <ContatosContext.Provider value={contexto}>
      {props.children}
    </ContatosContext.Provider>
  );
};

export default {ContatosContext}