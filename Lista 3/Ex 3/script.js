"use strict";
class Animal {
    constructor(porte, idade, peso) {
        this.porte = porte;
        this.idade = idade;
        this.peso = peso;
    }
    get _porte() {
        return this.porte;
    }
    set _porte(__porte) {
        this.porte = __porte;
    }
    get _idade() {
        return this.idade;
    }
    set _idade(__idade) {
        this.idade = __idade;
    }
    get _peso() {
        return this.peso;
    }
    set _peso(__peso) {
        this.peso = __peso;
    }
}
class Felino extends Animal {
    constructor(porte, idade, peso, tipoFelino) {
        super(porte, idade, peso);
        this.tipoFelino = tipoFelino;
        this.afiarGarras = () => {
            console.log("Ele está afiando garras");
        };
        this.dormir = () => {
            console.log("Ele está dormindo");
        };
    }
}
let felinos = [];
const inserirFelinos = () => {
    // Pode receber dados do prompt aqui
    felinos[0] = new Felino("Médio", 8, 65.2, "Gepardo");
    felinos[1] = new Felino("Pequeno", 1, 20.5, "Leopardo");
};
/** Função para decidir se o felino está dormindo ou afiando garras
 * @param posicaoFelino - posição do felino no vetor
 * @param acao - Ação que o felino está fazendo ("dormir" ou "afiar")
 */
const informarStatusFelino = (posicaoFelino, acao) => {
    if (acao === "dormir") {
        felinos[posicaoFelino].dormir();
    }
    else {
        felinos[posicaoFelino].afiarGarras();
    }
};
