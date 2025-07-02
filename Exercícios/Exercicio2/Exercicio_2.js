let num = null;
let fat = null;

function calFat(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

do {
    num = prompt("Digite um número inteiro e positivo para calcular o fatorial:");
    while (isNaN(num) || num < 0 || num % 1 !== 0) { // isNaN descobri agora que verifica se é um numero
        num = prompt("Número inválido. Digite um número inteiro e positivo:");
    }
    fat = calFat(Number(num));
    alert(`O fatorial de ${num} é ${fat}.`);
    var veri = prompt("Deseja verificar outro número? (s/n)").toLowerCase();
} while (veri === "s");