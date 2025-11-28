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

        // Exemplo de JS próprio do componente
        const btn = main.querySelector('#financeiroBtn');
        if (btn) {
            btn.onclick = () => {
                alert('Botão do Financeiro clicado!');
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Financeiro.</p>';
        console.error('Erro ao carregar o componente Financeiro:', error);
    }

    return main;
}