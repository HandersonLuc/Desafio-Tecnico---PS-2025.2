let fila = [];

let op;
do {
    let lista = "Fila de espera:\n";
    if (fila.length === 0) {
        lista += "(vazia)\n";
    } else {
        for (let i = 0; i < fila.length; i++) {
            lista += `${i + 1}º ${fila[i]}\n`;
        }
    }

    op = prompt(
        `${lista}\nEscolha uma opção:\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair`
    );

    if (op === "1") {
        let nome = prompt("Digite o nome do novo cliente:");
        fila.push(nome);
    } else if (op === "2") {
        if (fila.length === 0) {
            alert("Nenhum cliente na fila.");
        } else {
            let atendido = fila.shift();
            alert(`Cliente atendido: ${atendido}`);
        }
    } else if (op !== "3") {
        alert("Opção inválida!");
    }
} while (op !== "3");