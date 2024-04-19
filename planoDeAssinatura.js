const readline = require('readline');

function planoDeAssinatura(rl) {
    console.log("Qual o modelo de assinatura você deseja? \nOpção 1: Plano Mensal \nOpção 2: Plano Anual\n");
    rl.question("Selecione uma opção: ", (plano) => {
        if (plano === "1") {
            console.log("Parabéns! Você escolheu o plano mensal!");
            rl.close();
            const dadosCadastro = {
                nomeUsuario: nomeUsuario,
                email: email,
                telefone: telefone,
                senha: senha,
                plano: "Mensal" // 
            };
            armazenarDados(dadosCadastro); 
            exportarDadosParaJSON();
            process.exit();
        } else if (plano === "2") {
            console.log("Parabéns, você escolheu o plano anual!");
            rl.close();
            const dadosCadastro = {
                nomeUsuario: nomeUsuario,
                email: email,
                telefone: telefone,
                senha: senha,
                plano: "Anual"
            };
            armazenarDados(dadosCadastro);
            exportarDadosParaJSON();
            process.exit();
        } else {
            console.log("Por favor, selecione uma das opções válidas!\n");
            planoDeAssinatura(rl); 
        }
    });
}

module.exports = { planoDeAssinatura };

