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

        // Lógica de filtro e exportação (exemplo simples)
        const form = main.querySelector('#formFiltroRelatorio');
        const lista = main.querySelector('#listaRelatorios');
        if (form && lista) {
            form.onsubmit = function(e) {
                e.preventDefault();
                // Filtro simples (apenas tipo)
                const tipo = main.querySelector('#tipoRelatorio').value;
                const trs = lista.querySelectorAll('tr');
                trs.forEach(tr => {
                    const tipoTd = tr.children[2]?.textContent?.toLowerCase();
                    if (tipo === 'todos' || tipoTd === tipo) {
                        tr.style.display = '';
                    } else {
                        tr.style.display = 'none';
                    }
                });
            };
        }
        // Exportar CSV
        const exportBtn = main.querySelector('#exportarRelatorio');
        if (exportBtn && lista) {
            exportBtn.onclick = function() {
                let csv = 'Data,Descrição,Tipo,Valor\n';
                lista.querySelectorAll('tr').forEach(tr => {
                    if (tr.style.display !== 'none') {
                        const tds = Array.from(tr.children).map(td => td.textContent);
                        csv += tds.join(',') + '\n';
                    }
                });
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'relatorio.csv';
                a.click();
                URL.revokeObjectURL(url);
            };
        }
    } catch (error) {
        main.innerHTML = '<p>Erro ao carregar o componente Relatorios.</p>';
        console.error('Erro ao carregar o componente Relatorios:', error);
    }

    return main;
}