const readline = require('readline');


function planoDeAssinatura(rl, callback) {
    console.log("Qual o modelo de assinatura você deseja? \nOpção 1: Plano Mensal \nOpção 2: Plano Anual\n");
    rl.question("Selecione uma opção: ", (plano) => {
        if (plano === "1") {
            console.log("Parabéns! Você escolheu o plano mensal!");
            rl.close();
            callback("Mensal");
        } else if (plano === "2") {
            console.log("Parabéns, você escolheu o plano anual!");
            rl.close();
            callback("Anual");
        } else {
            console.log("Por favor, selecione uma das opções válidas!\n");
            planoDeAssinatura(rl, callback); 
        }
    });
}

module.exports = { planoDeAssinatura };

