let real = prompt("Qtd de reais: ");

function converteMoeda(moeda){
    let dolar = moeda/5.7;
    let euro = moeda/6.1;
    return `Dólar: ${dolar.toFixed(2)}\nEuro: ${euro.toFixed(2)}`;
}
console.log(converteMoeda(real));
alert(converteMoeda(real));