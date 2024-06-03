import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const ContatosContext = createContext({ meusContatos: [], 
                                        incluirContato: () => {}
                                    });

const ContatosContextProvider = (props) =>{
  const [ contatos, setContatos ] = useState([]);

  
  const incluirContato = (contato) => {
    setContatos([...contatos, contato]);
  }; 
  const contexto = {
    meusContatos: contatos,
    incluirContato: incluirContato
  };

  return (
    <ContatosContext.Provider value={contexto}>
      {props.children}
    </ContatosContext.Provider>
  );
}

// Adicionando validação de props
ContatosContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export {ContatosContext, ContatosContextProvider};
