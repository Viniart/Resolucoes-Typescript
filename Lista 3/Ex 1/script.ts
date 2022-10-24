class Usuario {
    // Implementação mais atual do Typescript permite
    // Criar os parametros dentro do construtor (simplifica o trabalho)
    admin: boolean = false;
    constructor(email: string,senha: string, )
    {}

    isAdmin = () => {
        if(this.admin === false)
        {
            console.log("Esse Usuário Não é Admin!");            
        }
        else 
        {
            console.log("Esse Usuário É Admin!");            
        }
    }
}

class Admin extends Usuario
{
    constructor(email: string,senha: string)
    {
        super(email, senha)
        this.admin = true;
    }
}

let user = new Usuario("vinicio@email.com", "123")
user.isAdmin()
let admin = new Admin("admin@email.com", "123")
admin.isAdmin()