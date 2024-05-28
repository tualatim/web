import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, userState } from 'react';
import Notes from './pages/notes';
import SignIn from './pages/signin';
import Login from './pages/login';
import Toast from '../components/Toast';

import './App.css'

export default function App() {

    const { user } = ();
  
    return (
      <>
        <BrowserRouter>
          <Routes>
            {user.logado ? (
              <Route>
                <Route path="/notes" element={<Notes />} />
              </Route>
            ) : (
            <Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/login" element={<Login />} />
            </Route>
          )}
              <Route path="*" element={<p>Página não Encontrada</p>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

