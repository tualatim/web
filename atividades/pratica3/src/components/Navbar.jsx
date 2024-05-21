import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
      <ul className="navbar">
        <li>
          <NavLink to="/" activeClassName="active">Meus Contatos</NavLink>
        </li>
        <li>
          <NavLink to="/novo" activeClassName="active">Novo Contato</NavLink>
        </li>
      </ul>
    );
  }
