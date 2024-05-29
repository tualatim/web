import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn.tsx";
import Login from "./pages/login/Login.tsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Página não Encontrada</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

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
