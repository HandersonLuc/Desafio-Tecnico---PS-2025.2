let jogadores = [];

function adicionarJogador() {
    let nome = prompt("Nome do jogador:");
    let idade = prompt("Idade do jogador:");
    let posicao = prompt("Posição do jogador:");
    let pontuacao = prompt("Pontuação do jogador:");
    jogadores.push({ nome, idade, posicao, pontuacao });
    alert("Jogador adicionado!");
}

function buscarPosicao() {
    let alvo = prompt("Digite a posição para buscar:").toLowerCase();
    let encontrados = jogadores.filter(j => j.posicao.toLowerCase() === alvo);
    if (encontrados.length === 0) alert("Nenhum jogador encontrado.");
    else{ let lista = encontrados.map(j => `${j.nome} (${j.posicao})`).join('\n'); alert(lista);}
}
function calcularPontuacaoMedia() {
    if (jogadores.length === 0) {
        alert("Nenhum jogador cadastrado.");
        return;
    }
    let soma = 0;
    for (let j of jogadores) {
        soma += j.pontuacao;
    }
    let media = soma / jogadores.length;
    alert(`Pontuação média do jogadores: ${media.toFixed(2)}`);
}

function listarjogadores() {
    if (jogadores.length === 0) {
        alert("Nenhum jogador cadastrado.");
    } else {
        console.log("Jogadores do jogadores:");
        jogadores.forEach(j => {
            console.log(`Nome: ${j.nome}, Idade: ${j.idade}, Posição: ${j.posicao}, Pontuação: ${j.pontuacao}`);
        });
        alert("Jogadores listados no console.");
    }
}


let opcao;
do {
    opcao = prompt(
        "Menu:\n1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar jogadores\n4 - Calcular pontuação média\n5 - Sair"
    );
    if (opcao === "1") {
        adicionarJogador();
    } else if (opcao === "2") {
        buscarPorPosicao();
    } else if (opcao === "3") {
        listarjogadores();
    } else if (opcao === "4") {
        calcularPontuacaoMedia();
    } else if (opcao !== "5") {
        alert("Opção inválida!");
    }
} while (opcao !== "5");

alert("Programa encerrado.");