let frase = prompt("Digite uma frase: ");
frase = frase.toLowerCase().replace(/\s/g, "");
let fraseInvertida = frase.split("").reverse().join("");

if (frase === fraseInvertida) {
    alert("A frase é um palíndromo!");
}
else {
    alert("A frase não é um palíndromo.");
}