
// Navegação SPA simples com sidebar
const pages = {
    
    dashboard: `
        <h2>Dashboard</h2>
        <p>Bem-vindo ao sistema financeiro da instituição religiosa.</p>`,
    
    cadastro: `
        <h2>Cadastro</h2>
        <p>Formulário de cadastro de membros, receitas e despesas.</p>`,
    
    financeiro: `
        <h2>Financeiro</h2>
        <p>Gerencie entradas e saídas financeiras.</p>`,
    
    relatorios: `
        <h2>Relatórios</h2>
        <p>Visualize e exporte relatórios financeiros.</p>`
};


function render(page) {

    // Sidebar para páginas autenticadas
    const sidebar = `
        <div class="sidebar">
            <h3>Finanças IG</h3>
            <button class="${page==='dashboard'?'active':''}" onclick="navigate('dashboard')">Dashboard</button>
            <button class="${page==='cadastro'?'active':''}" onclick="navigate('cadastro')">Cadastro</button>
            <button class="${page==='financeiro'?'active':''}" onclick="navigate('financeiro')">Financeiro</button>
            <button class="${page==='relatorios'?'active':''}" onclick="navigate('relatorios')">Relatórios</button>
            <button onclick="navigate('login')">Sair</button>
        </div>
    `;
    const main = `<div class="main-content">${pages[page]}</div>`;
    document.getElementById('app').innerHTML = sidebar + main;
}

function convertToString(pageContent) {
    
    return pageContent;
}

function navigate(page) {
    if (page === 'login') {
        window.location.href = './login/index.html';
        return;
    }

    render(convertToString(page));
}

// Inicializa na tela de login
render('dashboard');
