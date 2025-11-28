// Dashboard.js
export async function renderCadastro() {

    // Carrega o HTML do componente Dashboard
    const main = document.createElement('div');
    main.className = 'main-content cadastro-component';

    // Busca o conteúdo HTML do componente
    try {
        const response = await fetch('./components/Cadastro/index.html');  // Ajuste o caminho conforme necessário
        const htmlStringContent = await response.text();                    // Obtém o conteúdo como string
        main.innerHTML = htmlStringContent;                                 // Insere o conteúdo HTML no main

        // Lógica para adicionar membros na tabela (exemplo simples)
        const form = main.querySelector('#formCadastroMembro');
        const lista = main.querySelector('#listaMembros');
        if (form && lista) {
            form.onsubmit = function(e) {
                e.preventDefault();
                const nome = main.querySelector('#nomeMembro').value.trim();
                const email = main.querySelector('#emailMembro').value.trim();
                const tel = main.querySelector('#telefoneMembro').value.trim();
                if (nome && email) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${nome}</td><td>${email}</td><td>${tel}</td>`;
                    lista.appendChild(tr);
                    form.reset();
                }
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Cadastro.</p>';
        console.error('Erro ao carregar o componente Cadastro:', error);
    }

    return main;
}