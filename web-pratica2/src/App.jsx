import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { useContext, userState } from 'react';
//import Notes from './pages/notes';
import SignIn from './pages/signin';
//import Login from './pages/login';
//import Toast from './components/toast/Toast.tsx';
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<p>Página não Encontrada</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


/*
return (
    <>
      <BrowserRouter>
        <Routes>
          {user.logado ? (
            <Route>
              <Route path="/notes" element={<Notes />} />
            </Route>
          ) : (
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
            <Route path="*" element={<p>Página não Encontrada</p>} />
        </Routes>
      </BrowserRouter>
    </>
*/
