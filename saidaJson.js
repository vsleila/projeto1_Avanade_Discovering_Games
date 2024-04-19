const fs = require('fs');

// Função para exportar os dados para um arquivo JSON
function exportarDadosParaJSON(dadosArray) {

    const dadosJson = JSON.stringify(dadosArray);
    const nomeDoArquivo = 'dados.json';

    fs.writeFile(nomeDoArquivo, dadosJson, (err) => {
        if(err) {
            console.error('Ocorreu um erro na gravação:', err);
            return;
        }
        console.log("Arquivo JSON criado");
    });
}

module.exports = { exportarDadosParaJSON };