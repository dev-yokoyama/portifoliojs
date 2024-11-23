const projetos = [
    { nome: "Papelaria Japuiba", descricao: "Uma Papelaria incrivel", link: "#" },
    { nome: "Site de maquiagem", descricao: "Um site de maquiagem que estou fazendo para minha irma", link: "#" },
    { nome: "Minhoco", descricao: "Site de vendas que estou fazendo para o meu pai", link: "#" }
];

const projetosContainer = document.getElementById('projetos-container');

projetos.forEach(projeto => {
    const projetoDiv = document.createElement('div');
    projetoDiv.className = 'projeto';
    projetoDiv.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;
    projetosContainer.appendChild(projetoDiv);
});

document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const resposta = document.getElementById('resposta-formulario');
    resposta.textContent = `Obrigado pela mensagem, ${nome}! Entrarei em contato pelo email ${email}.`;
    resposta.style.color = 'green';

    this.reset();
});
