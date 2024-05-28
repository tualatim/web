import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, userState } from 'react';
import Notes from './pages/notes';
import SignIn from './pages/signin';
import Login from './pages/login';

import './App.css'

export default function App() {

    const { user } = ();
  
    return (
      <>
        <BrowserRouter>
          <Routes>
            {user.logado ? (
              <Route element={<Layout />}>
                <Route path="/" element={<Notes />} />
              </Route>
            ) : (
              <Route path="/signin" element={<SignIn />} />
            )}
              <Route path="*" element={<p>Página não Encontrada</p>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

