"use strict";
let dataAniversario = new Date(15, 6, 2002);
let dataAtual = new Date();
if (dataAniversario.getMonth() < dataAtual.getMonth()) {
    console.log("Já fez aniversário!");
}
else if (dataAniversario.getMonth() > dataAtual.getMonth()) {
    console.log("Ainda vai fazer aniversário!");
}
else {
    if (dataAniversario.getDate() < dataAtual.getDate()) {
        console.log("Já fez aniversário!");
    }
    else if (dataAniversario.getDate() > dataAtual.getDate()) {
        console.log("Ainda vai fazer aniversário!");
    }
    else {
        console.log("Parabéns pelo seu aniversário!");
    }
}
