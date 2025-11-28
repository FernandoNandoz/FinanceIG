// Relatorios.js
export async function renderRelatorios() {

    // Carrega o HTML do componente Relatorios
    const main = document.createElement('div');
    main.className = 'main-content relatorios-component';

    // Busca o conteúdo HTML do componente
    try {
        const response = await fetch('./components/Relatorios/index.html');  // Ajuste o caminho conforme necessário
        const htmlStringContent = await response.text();                    // Obtém o conteúdo como string
        main.innerHTML = htmlStringContent;                                 // Insere o conteúdo HTML no main

        // Exemplo de JS próprio do componente
        const btn = main.querySelector('#relatoriosBtn');
        if (btn) {
            btn.onclick = () => {
                alert('Botão do Relatorios clicado!');
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Relatorios.</p>';
        console.error('Erro ao carregar o componente Relatorios:', error);
    }

    return main;
}