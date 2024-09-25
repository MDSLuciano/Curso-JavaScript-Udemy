const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ]
// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

async function leArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados)
}
//essa função vai esperar a promisse ser executada e ja vai transformar em um objeto.
function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo)


