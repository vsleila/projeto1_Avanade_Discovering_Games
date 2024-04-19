const Sistema = require('./sistema');

// Criar uma instância do objeto Sistema e iniciar o sistema
const sistema = new Sistema();
sistema.iniciarSistema();

// Dados que serão exportados para o arquivo json
const { exportarDadosParaJSON } = require('./interfaceUsuario');
let dadosParaExportar = [];

// Função para armazenar os dados e exportá-los para o arquivo JSON
function armazenarEExportarDados(dados) {
    dadosParaExportar.push(dados);
    console.log("Dados armazenados:", dadosArray);
    exportarDadosParaJSON();
}

module.exports = { armazenarEExportarDados };