import React, { useState } from 'react';
//import { get_users } from '../utils/users';
import { useNavigate } from 'react-router-dom';
//import Toast from '../components/Toast';


export default function SignIn() {


    return (
        <body>
            <main>
                <h1 id="title">Sign in</h1>
                <form id="login-form">
                    <input type="text" name="name" placeholder="Nome" autoComplete="name" required />
                    <input type="email" name="email" placeholder="Email" autoComplete="email" required />
                    <input type="password" name="password" placeholder="Senha" required />

                    <input type="submit" value="Criar Conta" />
                </form>
                <div id="login-redirect" className="text-button">Fazer Login</div>
            </main>
        </body>
  );
};

