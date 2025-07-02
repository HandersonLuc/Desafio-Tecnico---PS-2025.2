let num = prompt("Digite um número: ");

function verifica(a){// a é o numero que vai ser verificado,, a = num
    if (a % 3 === 0 && a % 5 === 0) {
        return "fizzBuzz";
    } else if (a % 3 === 0) {
        return "fizz";
    }
    else if (a % 5 === 0) {
        return "buzz";
    } 
}

alert(verifica(num));
console.log(verifica(num));