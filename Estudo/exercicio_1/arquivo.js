let idade = prompt("Digite sua idade:");
let nome = prompt("Digite seu nome:");
let desconto = null;
let informacao = null;

function verificaDesconto(idade) {
    let estudante = prompt("Você é estudante? (sim/não)").toLowerCase();
    if (estudante === "sim") {
        if (idade >= 25) {
            informacao = "Você tem direito a desconto de estudante.";
            return "30%";
        } else {
            informacao = "Você tem direito a desconto de estudante.";
            return "20%";
        }
    } else {
        informacao = "Desconto padrão";
        return "10%.";
    }
}

function verificarIdade(idade) {
    if (idade >= 18) {
        desconto = verificaDesconto(idade);;
    } else if (idade >= 16 && idade < 18) {
        informacao = "Você precisa de autorização de responsável";
        desconto = "nada";
    } else if (idade < 16) {
        informacao = "Acesso negado";
        desconto = "nada";
    }
}

verificarIdade(Number(idade));
alert(`${nome} \n${desconto} \n${informacao}`);