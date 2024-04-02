
//Formulário de Cadastro
const root = document.getElementById("root");

function Titulo(nome) {
  const h1 = document.createElement("h1");
  h1.innerText = nome;
  return h1;
}

function Cabecalho() {
  const header = document.createElement("header");
  header.setAttribute("class", "cabecalho");
  header.append(Titulo("Login"));
  return header;
}

function Formulario() {
  const form = document.createElement("form");

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("placeholder", "Email");
  inputEmail.setAttribute("autocomplete", "username");
  inputEmail.setAttribute("required", true);

  const inputSenha = document.createElement("input");
  inputSenha.setAttribute("type", "password");
  inputSenha.setAttribute("name", "senha");
  inputSenha.setAttribute("placeholder", "Senha");
  //inputSenha.setAttribute("autocomplete", "current-password"); // adicionado
  inputSenha.setAttribute("required", true);

  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "Entrar");
  inputSubmit.addEventListener("click", efetuarLogin);

  form.append(inputEmail);
  form.append(inputSenha);
  form.append(inputSubmit);

  return form;
}

function efetuarLogin(event) {
  event.preventDefault();

  const inputEmail = document.querySelector('input[type="email"]');
  if (!inputEmail.value) {
    const erro = document.createElement("p");
    erro.innerText = "Email é obrigatório";
    inputEmail.parentElement.appendChild(erro);
    inputEmail.focus();
  }

  const inputSenha = document.querySelector('input[type="password"]');

  //chamada API Rest
  //arrumar o caminho do servidor
  fetch('', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: inputEmail.value, senha: inputSenha.value}),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Login bem-sucedido");
        window.location.href = "./index.html";        
      } else {
        console.error("Erro ao fazer login");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

function Principal() {
  const main = document.createElement("main");
  main.append(Formulario());
  return main;
}

root.append(Cabecalho());
root.append(Principal());


//Bloco de Notas
