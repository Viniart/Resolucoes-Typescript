class Pessoa {
    constructor(nome:string, endereco:string, cpf:string)
    {}
}

enum Turno {
    manha = "Manhã",
    tarde = "Tarde",
    noite = "Noite"
}

class Estudante extends Pessoa {
    constructor(nome:string, endereco:string, cpf:string, turma: string, public turno: Turno)
    {
        super(nome, endereco, cpf)
    }
}

let estudantes:Array<Estudante> = []

const inserirEstudantes = () => {
    estudantes[0] = new Estudante("V", "Rua de Teste, 533", "1112223334", "1A", Turno.manha);
    estudantes[1] = new Estudante("B", "Rua de Teste, 886", "2223334440", "4A", Turno.noite);
    estudantes[2] = new Estudante("V", "Rua de Teste, 533", "7775553331", "1C", Turno.tarde);
    // Pode inserir mais estudantes aqui, ou utilizar um for
}

const alterarTurno = (posicao:number, novoTurno:Turno) =>
{
    estudantes[posicao].turno = novoTurno;
}