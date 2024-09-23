//Quando for um modulo exports, não poderemos usar o import porque irá
//causar um erro, com isso teremos que fazer nessa estrutura colocando em
//uma variável e utilizando o require apontando para a pasta raiz.
const mod1 = require('./mod1')
const { Pessoa } = require('./classexemplo')

const p1 = new Pessoa('Luciano')
console.log(p1);


console.log(mod1.falaNome());
