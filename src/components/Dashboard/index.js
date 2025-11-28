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

        // Aqui você pode adicionar JS próprio do componente, se necessário
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Dashboard.</p>';
        console.error('Erro ao carregar o componente Dashboard:', error);
    }

    return main;
}