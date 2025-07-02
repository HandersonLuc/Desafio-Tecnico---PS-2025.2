let n = Number(prompt("Digite um número: "));

function fibo(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}
alert(fibo(n));
console.log(fibo(n));