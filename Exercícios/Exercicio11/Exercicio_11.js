let quantidade = (prompt("Quantos números deseja inserir?"));
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    let num = (prompt(`Digite o ${i + 1}º número:`));
    numeros.push(num);
}

let crescente = 0;
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        crescente++;
    }
}

console.log(crescente);
alert(`Quantidade de números em ordem crescente em relação ao anterior: ${crescente}`);