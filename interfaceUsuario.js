const readline = require('readline');
const { planoDeAssinatura } = require('./planoDeAssinatura');


// Função para armazenar os dados em um array para JSON
let dadosArray = []; 

function armazenarEExportarDados(dados) {
    dadosArray.push(dados);
    console.log("Dados armazenados:", dadosArray);
}

function digitaLogin(rl, callback) {
    console.log("Informe seus dados de login:");
    rl.question("Nome do usuário: ", (nomeDoUsuario) => {
        rl.question("Senha: ", (senhaUsuario) => {
            console.log(`Seja bem-vindo de volta, ${nomeDoUsuario}! Você será redirecionado para o seu perfil!`);
            rl.close();

            callback({
                nomeUsuario: nomeDoUsuario,
                senha: senhaUsuario
            });
        });
    });
}

function solicitaCadastroNoSistema(rl) {
    console.log("Por favor, preencha as informações abaixo para criar sua conta:");
    
    rl.question("Nome do usuário: ", (nomeUsuario) => {
        rl.question("E-mail: ", (email) => {
            rl.question("Telefone: ", (telefone) => {
                rl.question("Senha: ", (senha) => {
                    console.log("Cadastro feito com sucesso!\n");

                    planoDeAssinatura(rl, (dadosPlano) => {
                        const dadosCadastro = {
                            nomeUsuario: nomeUsuario,
                            email: email,
                            telefone: telefone,
                            senha: senha,
                            plano: dadosPlano
                        };
                        armazenarDados(dadosCadastro);
                        exportarDadosParaJSON();
                        console.log("Dados armazenados:", dadosCadastro);

                        process.exit();
                    });
                });
            });
        });
    });
}

module.exports = { digitaLogin, solicitaCadastroNoSistema, armazenarEExportarDados };