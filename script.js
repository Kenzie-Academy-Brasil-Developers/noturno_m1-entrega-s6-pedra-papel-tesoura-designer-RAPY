let contador = document.getElementById("contar"),
    formPc = document.getElementById("pchoose"),
    pedra = document.getElementById("pedra"),
    papel = document.getElementById("papel"),
    tesoura = document.getElementById("tesoura"),
    choose = document.getElementById("choose"),
    win = document.getElementById("win"),
    lose = document.getElementById("lose"),
    empate = document.getElementById("draw"),
    resetar = document.getElementById("reset"),
    back = document.getElementById("jogar"),
    vitoria = 0,
    derrota = 0;

resetar.onclick = function() {
    formPc.reset();
    contador.reset();

}

function winDisappear() {
    choose.style.display = "none";
    win.style.display = "none";
    lose.style.display = "none";
    empate.style.display = "none";
}

function delay() {
    setTimeout(function() {
        winDisappear()
    }, 1000);
}

function showWin() {
    choose.style.display = "block";
    win.style.display = "block";
    delay();
}

function showDraw() {
    choose.style.display = "block";
    empate.style.display = "block";
    delay();
}

function showLose() {
    choose.style.display = "block";
    lose.style.display = "block";
    delay();
}

let compare = function(arma) {

    let computer = [1, 2, 3];
    let random = computer[Math.floor(Math.random() * computer.length)];

    if (random == 1) {
        computer = "Pedra!";
    } else if (random == 2) {
        computer = "Papel!";
    } else {
        computer = "Tesoura!";
    }

    if (arma == "pedra") {
        if (computer == "Pedra!") {

            formPc.pc.value = computer;
            contador.empate.value = +contador.empate.value + 1;
            showDraw();

        } else if (computer == "Papel!") {

            formPc.pc.value = computer;
            contador.lose.value = +contador.lose.value + 1;
            showLose();


        } else {
            formPc.pc.value = computer;
            contador.vic.value = +contador.vic.value + 1;
            showWin();

        }
    }
    if (arma == "papel") {
        if (computer == "Pedra!") {

            formPc.pc.value = computer;
            contador.vic.value = +contador.vic.value + 1;
            showWin();

        } else if (computer == "Papel!") {

            formPc.pc.value = computer;
            contador.empate.value = +contador.empate.value + 1;
            showDraw();

        } else {
            formPc.pc.value = computer;
            contador.lose.value = +contador.lose.value + 1;
            showLose();
        }
    }
    if (arma == "tesoura") {
        if (computer == "Pedra!") {

            formPc.pc.value = computer;
            contador.lose.value = +contador.lose.value + 1;
            showLose();

        } else if (computer == "Papel!") {

            formPc.pc.value = computer;
            contador.vic.value = +contador.vic.value + 1;
            showWin();

        } else {
            formPc.pc.value = computer;
            contador.empate.value = +contador.empate.value + 1;
            showDraw();

        }
    }
}

pedra.onclick = function() {
    compare("pedra");
}
papel.onclick = function() {
    compare("papel");
}

tesoura.onclick = function() {
    compare("tesoura");
}