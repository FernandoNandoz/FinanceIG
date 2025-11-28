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

        // Exemplo de JS próprio do componente
        const btn = main.querySelector('#cadastroBtn');
        if (btn) {
            btn.onclick = () => {
                alert('Botão do cadastro clicado!');
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Cadastro.</p>';
        console.error('Erro ao carregar o componente Cadastro:', error);
    }

    return main;
}