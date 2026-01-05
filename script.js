const linksEmpresa = {
    kpi: "aHR0cHM6Ly9kYmNvdmVyLnNoYXJlcG9pbnQuY29tLzp4Oi9zL29wZXJhdGlvbnMvRVhZZzRVTFVNQmxQaUZVRkhqQU52RVVCaERRVC1OQjhqTjhCTmVOYUttWnlQdz9lPTQlM2FHTFh2aEMmYXQ9OQ==",
    sharepoint: "aHR0cHM6Ly9kYmNvdmVyLnNoYXJlcG9pbnQuY29tL3NpdGVzL29wZXJhdGlvbnMvRG9jdW1lbnRvcyUyMGNvbXBhcnRpZG9zL0Zvcm1zL0FsbEl0ZW1zLmFzcHg/aWQ9JTJGc2l0ZXMlMkZvcGVyYXRpbvbnMlMkZEb2N1bWVudG9zJTIwY29tcGFydGlkb3MlMkZaQlJBU0lMJTIwTkUlMkZBTkFMSVNFJTIwU0VHVU5EQSUyMFFVQUxJREFERUUlMjBFJTIwUEVSREFTJnZpZXdpZD05MjQyZTk5OC0yY2Q2LTQ1ZTEtYjA4ZS1jYzdkMTY4N2Y1NWEmcD10cnVlJmdhPTE="
};

// Função para abrir os links apenas no clique
function configurarLinks() {
    const btnKpi = document.getElementById('link-kpi');
    const btnSp = document.getElementById('link-sharepoint');

    if(btnKpi) {
        btnKpi.addEventListener('click', (e) => {
            e.preventDefault();
            // Decodifica e abre
            window.open(atob(linksEmpresa.kpi), '_blank');
        });
    }

    if(btnSp) {
        btnSp.addEventListener('click', (e) => {
            e.preventDefault();
            // Decodifica e abre
            window.open(atob(linksEmpresa.sharepoint), '_blank');
        });
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', configurarLinks);

// --- LÓGICA: Calculadora de Horas ---
function calcularHoras() {
    const h1 = parseInt(document.getElementById('h_ini').value) || 0;
    const m1 = parseInt(document.getElementById('m_ini').value) || 0;
    const h2 = parseInt(document.getElementById('h_fim').value) || 0;
    const m2 = parseInt(document.getElementById('m_fim').value) || 0;

    let total1 = (h1 * 60) + m1;
    let total2 = (h2 * 60) + m2;

    if (total2 < total1) total2 += 1440; 

    const dif = total2 - total1;
    document.getElementById('res_minutos').innerText = dif;
    document.getElementById('res_formatado').innerText = `Tempo: ${Math.floor(dif/60)}h ${(dif%60).toString().padStart(2,'0')}min`;
}

// --- LÓGICA: Calculadora de Corte ---
function calcularCorte() {
    const qtd = document.getElementById('chapas').value;
    const sel = document.getElementById('material_corte');
    const opt = sel.options[sel.selectedIndex];
    
    if (!qtd || qtd <= 0) return;
    const res = (qtd * opt.dataset.multi) / opt.dataset.div;
    document.getElementById('resultado_corte').innerText = res.toFixed(2);
}

// --- LÓGICA: Calculadora de Consumo ---
function calcularConsumo() {
    const qtd = document.getElementById('quantidade_consumo').value;
    const cons = document.getElementById('material_consumo').value;
    
    if (!qtd || qtd <= 0) return;
    const res = qtd * cons;
    document.getElementById('resultado_consumo').innerText = res.toFixed(3);
}
