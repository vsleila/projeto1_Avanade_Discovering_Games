const fs = require('fs');

// Função para exportar os dados para um arquivo JSON
function exportarDadosParaJSON(dados) {
    // Convertendo dados para JSON
    const dadosJson = JSON.stringify(dados);
    
    // Nome do arquivo
    const nomeDoArquivo = 'dados.json';
    
    // Escrever os dados no arquivo JSON
    fs.writeFile(nomeDoArquivo, dadosJson, (err) => {
        if(err) {
            console.error('Ocorreu um erro na gravação:', err);
            return;
        }
        console.log("Arquivo JSON criado");
    });
}

module.exports = { exportarDadosParaJSON };