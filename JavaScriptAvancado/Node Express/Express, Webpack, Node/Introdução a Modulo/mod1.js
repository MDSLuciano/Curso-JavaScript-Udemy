const nome = 'Luciano'
const sobrenome = "Machado"

const falaNome = () => nome + '  ' + sobrenome
//Podemos adicionar as nossas variáveis no module export e ele adiciona dentro de um objeto
//que pode ser exportado.
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome

//maneira mais simplificada.
exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
//e podemos exportar como se fosse um objeto usando o this.
this.QualquerCoisa = 'Qualquer coisa'

console.log(module.exports);
