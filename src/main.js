// Importa os componentes necessários
import { renderDashboard } from './components/Dashboard/index.js';
import { renderCadastro } from './components/Cadastro/index.js';
import { renderFinanceiro } from './components/Financeiro/index.js';
import { renderRelatorios } from './components/Relatorios/index.js';


// Verifica se o CSS do Dashboard já foi carregado
function loadComponenteCSS(componentName) {

    if (componentName === 'dashboard') {
        // Evita múltiplas inclusões
        if (document.getElementById('dashboard-css')) {
            return;
        }

        const link = document.createElement('link');        // Cria o elemento link
        link.rel = 'stylesheet';                            // Define o relacionamento como stylesheet
        link.href = './components/Dashboard/style.css';     // Define o caminho do arquivo CSS
        link.id = 'dashboard-css';                          // Define um ID para evitar múltiplas inclusões
        document.head.appendChild(link);                    // Adiciona o link ao head do documento

    } else if (componentName === 'cadastro') {

        // Evita múltiplas inclusões
        if (document.getElementById('cadatro-css')) {
            return;
        }

        const link = document.createElement('link');        // Cria o elemento link
        link.rel = 'stylesheet';                            // Define o relacionamento como stylesheet
        link.href = './components/Cadastro/style.css';      // Define o caminho do arquivo CSS
        link.id = 'cadastro-css';                            // Define um ID para evitar múltiplas inclusões
        document.head.appendChild(link);                    // Adiciona o link ao head do documento

    } else if (componentName === 'financeiro') {

        // Evita múltiplas inclusões
        if (document.getElementById('financeiro-css')) {
            return;
        }

        const link = document.createElement('link');        // Cria o elemento link
        link.rel = 'stylesheet';                            // Define o relacionamento como stylesheet
        link.href = './components/Financeiro/style.css';      // Define o caminho do arquivo CSS
        link.id = 'financeiro-css';                            // Define um ID para evitar múltiplas inclusões
        document.head.appendChild(link);                    // Adiciona o link ao head do documento

    } else if (componentName === 'relatorios') {

        // Evita múltiplas inclusões
        if (document.getElementById('relatorios-css')) {
            return;
        }

        const link = document.createElement('link');        // Cria o elemento link
        link.rel = 'stylesheet';                            // Define o relacionamento como stylesheet
        link.href = './components/Relatorios/style.css';      // Define o caminho do arquivo CSS
        link.id = 'relatorios-css';                            // Define um ID para evitar múltiplas inclusões
        document.head.appendChild(link);                    // Adiciona o link ao head do documento
    }
}



// Função principal para renderizar a aplicação
async function render(page) {

    // Pega o elemento raiz da aplicação
    const app = document.getElementById('app'); 
    
    // Sidebar para páginas autenticadas
    const sidebar = `
        <div class="sidebar">
            <h3>Finanças IG</h3>

            <button class="${page==='dashboard'?'active':''}" data-page="dashboard">
                Dashboard
            </button>

            <button class="${page==='cadastro'?'active':''}" data-page="cadastro">
                Cadastro
            </button>

            <button class="${page==='financeiro'?'active':''}" data-page="financeiro">
                Financeiro
            </button>

            <button class="${page==='relatorios'?'active':''}" data-page="relatorios">
                Relatórios
            </button>

            <button data-page="login">
                Sair
            </button>
        </div>
    `;

    // Adiciona a sidebar ao app
    app.innerHTML = sidebar;

    // Remove main-content antigo se existir
    const oldMain = document.querySelector('.main-content');
    if (oldMain) {
        oldMain.remove();
    }

    // Renderiza o conteúdo principal baseado na página
    let main;

    if (page === 'dashboard') {
        // Carrega o CSS do componente Dashboard
        loadComponenteCSS(page);
        // Renderiza o componente Dashboard
        main = await renderDashboard();

    } else if (page === 'cadastro') { 
        // Carrega o CSS do componente Cadastro
        loadComponenteCSS(page);
        // Renderiza o componente Cadastro
        main = await renderCadastro();;

    } else if (page === 'financeiro') {
        // Carrega o CSS do componente Financeiro
        loadComponenteCSS(page);
        // Renderiza o componente Financeiro
        main = await renderFinanceiro();

    } else if (page === 'relatorios') {
        // Carrega o CSS do componente Relatórios
        loadComponenteCSS(page);
        // Renderiza o componente Relatórios
        main = await renderRelatorios();

    } else {
        // Página não encontrada
        main = document.createElement('div');
        main.className = 'main-content';
        main.innerHTML = `<h2>Página não encontrada</h2>`;
    }

    // Adiciona o main ao app
    app.appendChild(main);


    // Adiciona eventos aos botões do menu (event delegation)
    const sidebarDiv = app.querySelector('.sidebar');
    sidebarDiv.addEventListener('click', async function(e) {
        if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-page')) {
            const targetPage = e.target.getAttribute('data-page');
            if (targetPage === 'login') {
                window.location.href = './login.html';
            } else {
                await render(targetPage);
            }
        }
    });
}


// Inicializa na tela de dashboard
render('dashboard');
