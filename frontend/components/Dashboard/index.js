// Dashboard.js
export async function renderDashboard() {

    // Carrega o HTML do componente Dashboard
    const main = document.createElement('div');
    main.className = 'main-content dashboard-component';

    // Busca o conteúdo HTML do componente
    try {
        const response = await fetch('./components/Dashboard/index.html');  // Ajuste o caminho conforme necessário
        const htmlStringContent = await response.text();                    // Obtém o conteúdo como string
        main.innerHTML = htmlStringContent;                                 // Insere o conteúdo HTML no main

        // Exemplo de JS próprio do componente
        const btn = main.querySelector('#dashboardBtn');
        if (btn) {
            btn.onclick = () => {
                alert('Botão do Dashboard clicado!');
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Dashboard.</p>';
        console.error('Erro ao carregar o componente Dashboard:', error);
    }

    return main;
}