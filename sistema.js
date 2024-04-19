const readline = require('readline');
const { digitaLogin, solicitaCadastroNoSistema, armazenarEExportarDados } = require('./interfaceUsuario');


class Sistema {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    mensagemDeBoasVindas() {
        console.log("Bem-vindo ao Discovering Games!");
    }

    verificarContaDeCadastro() {
        this.rl.question("Você possui uma conta de cadastro em nosso sistema? \nOpção 1: Sim \nOpção 2: Não\n", (resposta) => {
            if (resposta === "1") {
                console.log("Que bom! Por favor, faça login para acessar sua conta!");
                digitaLogin(this.rl, armazenarEExportarDados);
            } else if (resposta === "2") {
                console.log("Sem problemas! Você pode se cadastrar agora mesmo!\n");
                solicitaCadastroNoSistema(this.rl, armazenarEExportarDados);
            } else {
                console.log("Por favor, selecione uma das opções válidas!\n");
                this.verificarContaDeCadastro(); 
            }
        });
    }

    iniciarSistema() {
        this.mensagemDeBoasVindas();
        this.verificarContaDeCadastro();
    }
}

module.exports = Sistema;