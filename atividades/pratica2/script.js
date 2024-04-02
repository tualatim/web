const contatos = {nome: "NOME DO CONTATO", fone: "FONE DO CONTATO"}

const root = document.getElementById('root');

function Titulo(nome){
    const h2 = document.createElement('h2');
    h2.innerText = nome;
    return h2;
}

function InputText() {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Nome do contato';
    return inputElement;
}
const nomeInput = InputText();
document.body.appendChild(nomeInput); // Adiciona o campo de entrada ao corpo do documento


function InputTel() {
    const inputElement = document.createElement('input');
    inputElement.type = 'tel';
    inputElement.placeholder = 'Telefone do contato';
    return inputElement;
}
const telefoneInput = InputTel();
document.body.appendChild(telefoneInput); // Adiciona o campo de entrada ao corpo do documento

function InputSubmit() {
    const inputElement = document.createElement('input');
    inputElement.type = 'submit';
    inputElement.value = 'Salvar dados do formulário';
    return inputElement;
}
const submitButton = InputSubmit();
document.body.appendChild(submitButton); // Adiciona o botão de envio ao corpo do documento


function validateForm(campos) {
    // Verifica se o campo Nome tem pelo menos 3 caracteres
    const nome = campos.get('Nome');
    if (nome.length < 3) {
        return false;
    }

    // Verifica se o campo Telefone está no formato (99)99999-9999
    const telefone = campos.get('Telefone');
    const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        return false;
    }

    // Retorna true se todas as validações passarem
    return true;
}

function handleSubmit(event) {
    event.preventDefault(); // Impede que o formulário seja enviado

    const msgErro = document.querySelector('p.erro');
    msgErro.textContent = ''; // Limpa o texto interno do elemento <p> com a classe erro

    // Converte o elemento <form> em um objeto FormData
    const formData = new FormData(event.target);

    // Testa o retorno da função validateForm()
    if (!validateForm(formData)) {
        msgErro.textContent = "Nome deve conter pelo menos 3 caracteres e Telefone deve estar no formato (99)99999-9999";
        return; // Interrompe a função handleSubmit() se a validação falhar
    }

    // Objeto para armazenar os contatos
    const contatos = [];

    // Percorre cada campo do FormData e gera um objeto de contato
    formData.forEach((valor, chave) => {
        if (chave === 'Nome' || chave === 'Telefone') {
            contatos.push({ [chave.toLowerCase()]: valor });
        }
    });

    // Chama a função para carregar 'Meus Contatos'
    navegaPara('Meus Contatos');
}

function FormContato() {
    // Cria o elemento <form>
    const formElement = document.createElement('form');

    // Adiciona os campos gerados pelas funções InputText(), InputTel() e InputSubmit()
    formElement.appendChild(InputText());
    formElement.appendChild(InputTel());
    formElement.appendChild(InputSubmit());

    return formElement;
}

// Obtém o elemento do formulário
const formulario = document.querySelector('form');

// Adiciona a função handleSubmit() como ouvinte ao evento submit do formulário
formulario.addEventListener('submit', handleSubmit());

function ListaContato() {
    // Cria o elemento <table>
    const tableElement = document.createElement('table');

    // Cria uma linha de cabeçalho
    const headerRow = document.createElement('tr');
    const nomeHeader = document.createElement('th');
    nomeHeader.textContent = 'Nome';
    const foneHeader = document.createElement('th');
    foneHeader.textContent = 'Telefone';
    headerRow.appendChild(nomeHeader);
    headerRow.appendChild(foneHeader);
    tableElement.appendChild(headerRow);

    // Percorre a constante contatos e cria uma linha para cada contato
    for (const contato of contatos) {
        const row = document.createElement('tr');
        const nomeCell = document.createElement('td');
        nomeCell.textContent = contato.nome;
        const foneCell = document.createElement('td');
        foneCell.textContent = contato.fone;
        row.appendChild(nomeCell);
        row.appendChild(foneCell);
        tableElement.appendChild(row);
    }

    return tableElement;
}

function MeusContatos() {
    // Limpa o conteúdo da constante root
    limpaConteudo();

    // Adiciona o título "Meus Contatos"
    const titulo = Titulo('Meus Contatos');
    root.appendChild(titulo);

    // Adiciona a lista de contatos
    const listaContatos = ListaContato();
    root.appendChild(listaContatos);
}

function NovoContato() {
    // Limpa o conteúdo da constante root
    limpaConteudo();

    // Adiciona o título "Novo Contato"
    const titulo = Titulo('Novo Contato');
    root.appendChild(titulo);

    // Adiciona um elemento <p> contendo a classe erro
    const erroElement = document.createElement('p');
    erroElement.classList.add('erro');
    root.appendChild(erroElement);

    // Adiciona o formulário de contato
    const formContato = FormContato();
    root.appendChild(formContato);
}

function limpaConteudo() {
    // Converte os filhos de root em um array
    const filhos = Array.from(root.children);

    // Remove cada filho de root
    filhos.forEach(filho => {
        root.removeChild(filho);
    });
}

function ativaLink(rota) {
    // Obtém todos os elementos <a> dentro do elemento com a classe 'nav'
    const links = document.querySelectorAll('.nav a');

    // Itera sobre cada link
    links.forEach(link => {
        // Verifica se o texto interno do link é igual à rota
        if (link.textContent.trim() === rota) {
            // Adiciona a classe 'ativo' ao link se o texto interno for igual à rota
            link.classList.add('ativo');
        } else {
            // Remove a classe 'ativo' do link se o texto interno não for igual à rota
            link.classList.remove('ativo');
        }
    });
}

function navegaPara(rota) {
    // Limpa o conteúdo da página
    limpaConteudo();

    // Ativa o link da rota
    ativaLink(rota);

    // Exibe 'Meus Contatos' ou 'Novo Contato' dependendo da rota
    if (rota === 'Meus Contatos') {
        MeusContatos();
    } else if (rota === 'Novo Contato') {
        NovoContato();
    }
}

function adicionaClickListener() {
    // Seleciona todos os elementos <a>
    const elementosA = document.querySelectorAll('a');

    // Itera sobre cada elemento <a>
    elementosA.forEach(elemento => {
        // Adiciona um ouvinte de evento de clique a cada elemento <a>
        elemento.addEventListener('click', function() {
            // Obtém o texto do elemento <a> clicado
            const rota = this.textContent.trim();
            
            // Chama a função navegaPara() passando o texto do elemento <a> como parâmetro
            navegaPara(rota);
        });
    });
}

// Chamada da função adicionaClickListener()
adicionaClickListener();

// Chamada da função navegaPara() com a rota 'Meus Contatos'
navegaPara('Meus Contatos');

