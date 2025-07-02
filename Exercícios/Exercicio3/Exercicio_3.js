function verificarIdades(anosNascimento, anoAtual) {
    let resultados = [];
    for (let i = 0; i < anosNascimento.length; i++) {
        let idade = anoAtual - anosNascimento[i];
        if (idade >= 18) {
            resultados.push("maior");
            console.log(`Pessoa ${i + 1}: Maior de idade`);
        } else {
            resultados.push("menor");
            console.log(`Pessoa ${i + 1}: Menor de idade`);
        }
    }
    return resultados;
}

let anoAtual = (prompt("Digite o ano atual:"));
let qtdPessoas = (prompt("Quantas pessoas deseja verificar?"));
let anosNascimento = [];

for (let i = 0; i < qtdPessoas; i++) {
    let ano = prompt(`Digite o ano de nascimento da pessoa ${i + 1}:`);
    anosNascimento.push(ano);
}

resultado = verificarIdades(anosNascimento, anoAtual);

for (let i = 0; i < qtdPessoas; i++) {
    prompt(`Pessoa ${i + 1}: ${resultado[i]}`);
}


