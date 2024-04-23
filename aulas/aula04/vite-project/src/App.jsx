import './App.css'
import { userState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
    const [logado, setLogado] = userState(true);

    function onLogar(){
      setLogado(true);  
    }

    return (
      <>
        { logado 
          ? <Home />
          : <Login onLogar={onLogar}/> }
      </>
    );
}

export default App
