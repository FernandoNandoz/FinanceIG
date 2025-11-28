// Financeiro.js
export async function renderFinanceiro() {

    // Carrega o HTML do componente Financeiro
    const main = document.createElement('div');
    main.className = 'main-content financeiro-component';

    // Busca o conteúdo HTML do componente
    try {
        const response = await fetch('./components/Financeiro/index.html');  // Ajuste o caminho conforme necessário
        const htmlStringContent = await response.text();                    // Obtém o conteúdo como string
        main.innerHTML = htmlStringContent;                                 // Insere o conteúdo HTML no main

        // Lógica para adicionar lançamentos na tabela (exemplo simples)
        const form = main.querySelector('#formFinanceiro');
        const lista = main.querySelector('#listaFinanceiro');
        if (form && lista) {
            form.onsubmit = function(e) {
                e.preventDefault();
                const tipo = main.querySelector('#tipoLancamento').value;
                const desc = main.querySelector('#descricaoLancamento').value.trim();
                const valor = main.querySelector('#valorLancamento').value.trim();
                const data = main.querySelector('#dataLancamento').value;
                if (desc && valor && data) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${data}</td><td>${desc}</td><td>${tipo}</td><td>${parseFloat(valor).toFixed(2)}</td>`;
                    lista.prepend(tr);
                    form.reset();
                }
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Financeiro.</p>';
        console.error('Erro ao carregar o componente Financeiro:', error);
    }

    return main;
}