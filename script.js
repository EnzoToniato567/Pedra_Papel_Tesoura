var regras = document.getElementsByClassName("regras")[0];

function mostrarRegras() {
    regras.style.display = "flex";
}

function fecharRegras() {
    regras.style.display = "none";
}

var jogo = document.getElementsByClassName("jogo")[0];
var selecao = document.getElementsByClassName("gameplay")[0];
var test = document.getElementsByClassName("test")[0];
var opcao = document.getElementsByClassName("opcao")[0];
var pedra = document.getElementsByClassName("pedra")[0];
var papel = document.getElementsByClassName("papel")[0];
var tesoura = document.getElementsByClassName("tesoura")[0];
var spock = document.getElementsByClassName("spock")[0];
var lagarto = document.getElementsByClassName("lagarto")[0];
var test1 = document.getElementsByClassName("test1")[0];
var resultado = document.getElementsByClassName("result")[0];
var refs = [pedra, papel, tesoura, spock, lagarto];
var pontuacao = document.getElementsByClassName("pontuacao")[0];
var playAgain = document.getElementsByClassName("fim")[0];
var score = 0;
var buttomRegras = document.getElementsByClassName("regras-button")[0];

function jogar(num) {
    jogo.style.cssText = "animation: opacidade 0.5s linear; animation-direction: reverse;"
    setTimeout(() => {
        jogo.style.display = "none";
    }, 500);

    setTimeout(() => {
        selecao.style.display = "flex";
    }, 500);

    selecao.style.cssText = "animation: opacidade 1.5s linear;"
    buttomRegras.style.display = "none";

    switch (num) {
        case pedra:
            test.innerHTML = pedra.outerHTML;
            test.value = pedra.value;
            break;
        case papel:
            test.innerHTML = papel.outerHTML;
            test.value = papel.value;
            break;
        case tesoura:
            test.innerHTML = tesoura.outerHTML;
            test.value = tesoura.value;
            break;
        case spock:
            test.innerHTML = spock.outerHTML;
            test.value = spock.value;
            break;
        case lagarto:
            test.innerHTML = lagarto.outerHTML;
            test.value = lagarto.value;
            break;
        default:
            break;
    }

    var random = Math.floor(Math.random() * refs.length);
    var house = refs[random];
    test1.innerHTML = house.outerHTML;
    test1.value = house.value;

    setTimeout(() => {
        Resolucao()
    }, 500);
}

function Resolucao() {
    const winMap = {
        pedra: ["tesoura", "lagarto"],
        papel: ["pedra", "spock"],
        tesoura: ["papel", "lagarto"],
        lagarto: ["papel", "spock"],
        spock: ["tesoura", "pedra"]
    };
    const player = test.value;
    const house = test1.value;
    if (player === house) {
        resultado.innerHTML = "Empate!";
        test.style.cssText = "animation: luzDeFundo 1.5s ease infinite;";
        test1.style.cssText = "animation: luzDeFundo 1.5s ease infinite;";
    } else if (winMap[player] && winMap[player].includes(house)) {
        resultado.innerHTML = "Você Ganhou!";
        score += 1;
        pontuacao.innerHTML = score;
        test.style.cssText = "animation: luzDeFundo 1.5s ease infinite;";
    } else {
        resultado.innerHTML = "Você Perdeu!";
        test1.style.cssText = "animation: luzDeFundo 1.5s ease infinite;";
    }
    playAgain.style.display = "flex";
}

function reset() {
    jogo.style.display = "flex";
    selecao.style.display = "none";
    resultado.innerHTML = "";
    playAgain.style.display = "none";
    buttomRegras.style.display = "block";
    test.style.animation = "";
    test1.style.animation = "";
    jogo.style.cssText = "";
    jogo.style.display = "block";
}