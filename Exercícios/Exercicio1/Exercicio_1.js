let a = prompt("Digite o valor de a:");
let b = prompt("Digite o valor de b:");
let c = prompt("Digite o valor de c:");

function calcularBhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Não existem raízes reais.";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return `A raiz é: ${x}`;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `As raízes são: ${x1} e ${x2}`;
    }
}
let resultado = calcularBhaskara(Number(a), Number(b), Number(c));
alert(resultado);
console.log(resultado);