const mongoose = require('mongoose')
const validator = require('validator')//biblioteca para validar os dados
const bcryptjs = require('bcryptjs')//biblioteca para criptografar os dados

const LoginSchema = new mongoose.Schema({     //Criando o Schema do mongoose para fazer os tratamentos dos dados
    email: { type:String, required: true},
    password: { type:String, required: true}
})

const LoginModel = mongoose.model('Login', LoginSchema);

//Essa classe vai fazer o tratamento dos dados, e vai me apresentar os erros
class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

//Essa função vai registrar o usuário, mas para isso ela irá esperar o
//método de validação.
    async register() {
        this.valida()
        if(this.errors.length > 0) return

        await this.userExists()

        if(this.errors.length > 0) return
        
        const salt = bcryptjs.genSaltSync()//Gerando o hash da senha
        this.body.password = bcryptjs.hashSync(this.body.password, salt)//Criptografando a senha

        try{
            this.user = await LoginModel.create(this.body)
        }catch(e) {
            console.log(e)
        }
    }
    
    async userExists() {
        this.user = await LoginModel.findOne({email: this.body.email})
        if(this.user) this.errors.push('E-mail ja existe')
    }
    valida(){
        this.cleanUp()
        // Validação
        // O email precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
        
        // A senha precisa ter entre 3 e 20 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 20) {
            this.errors.push('A senha precisa ter entre 3 e 20 caracteres')
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = LoginModel
module.exports = Login