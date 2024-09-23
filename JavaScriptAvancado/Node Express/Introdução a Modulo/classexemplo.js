const { sobrenome } = require("./mod1")

class Pessoa{
    constructor(nome){
        this.nome  = nome
    }
}

//Não esquecer que o exports precisa receber o método como por exemplo abaixo
//exports.Pessoa = Pessoa logo em seguida do método precisa colocar a maneira 
//que iremos chamar ele. 
exports.Pessoa = Pessoa

//Se quisermos passar diretamente o que queremos passar no exports, passando
//um objeto não podemos usar o exports, precisando usar o module.exports,
//um exemplo abaixo para entender melhor.
module.exports = {
    nome, sobrenome, Pessoa
}