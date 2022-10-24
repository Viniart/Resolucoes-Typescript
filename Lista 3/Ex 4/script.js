"use strict";
class Pessoa {
    constructor(nome, endereco, cpf) { }
}
var Turno;
(function (Turno) {
    Turno["manha"] = "Manh\u00E3";
    Turno["tarde"] = "Tarde";
    Turno["noite"] = "Noite";
})(Turno || (Turno = {}));
class Estudante extends Pessoa {
    constructor(nome, endereco, cpf, turma, turno) {
        super(nome, endereco, cpf);
        this.turno = turno;
    }
}
let estudantes = [];
const inserirEstudantes = () => {
    estudantes[0] = new Estudante("V", "Rua de Teste, 533", "1112223334", "1A", Turno.manha);
    estudantes[1] = new Estudante("B", "Rua de Teste, 886", "2223334440", "4A", Turno.noite);
    estudantes[2] = new Estudante("V", "Rua de Teste, 533", "7775553331", "1C", Turno.tarde);
    // Pode inserir mais estudantes aqui, ou utilizar um for
};
const alterarTurno = (posicao, novoTurno) => {
    estudantes[posicao].turno = novoTurno;
};
