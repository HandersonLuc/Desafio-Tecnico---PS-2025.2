function encontrarElementoUnico(arr) {
    let unico = 0;
    for (let num of arr) {
        unico ^= num; // XOR elimina pares e sobra o único
    }
    return unico;
}

// Exemplo de uso:
let numeros = [2, 3, 5, 4, 5, 3, 4];
let resultado = encontrarElementoUnico(numeros);
console.log("Elemento único:", resultado);
alert(`Elemento único: ${resultado}`);