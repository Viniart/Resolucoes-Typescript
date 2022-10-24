class Animal {
    constructor(private porte: string, private idade: number, private peso: number)
    {}

    public get _porte() {
        return this.porte;
    }

    public set _porte(__porte: string)
    {
        this.porte = __porte;
    }

    public get _idade() {
        return this.idade;
    }

    public set _idade(__idade: number)
    {
        this.idade = __idade;
    }

    public get _peso() {
        return this.peso;
    }

    public set _peso(__peso: number)
    {
        this.peso = __peso;
    }
}

class Felino extends Animal {
    constructor(porte: string, idade: number, peso: number, private tipoFelino:string)
    {
        super(porte, idade, peso)
    }

    afiarGarras = () => {
        console.log("Ele está afiando garras");        
    }

    dormir = () => {
        console.log("Ele está dormindo");        
    }
}

let felinos:Array<Felino> = []

const inserirFelinos = () => {
    // Pode receber dados do prompt aqui
    felinos[0] = new Felino("Médio", 8, 65.2, "Gepardo");
    felinos[1] = new Felino("Pequeno", 1, 20.5, "Leopardo");
}

/** Função para decidir se o felino está dormindo ou afiando garras
 * @param posicaoFelino - posição do felino no vetor
 * @param acao - Ação que o felino está fazendo ("dormir" ou "afiar")
 */
const informarStatusFelino = (posicaoFelino:number, acao:string) =>
{
    if(acao === "dormir")
    {
        felinos[posicaoFelino].dormir();
    }
    else
    {
        felinos[posicaoFelino].afiarGarras();
    }
}