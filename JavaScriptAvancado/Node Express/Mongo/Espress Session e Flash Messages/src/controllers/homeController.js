const homeModel = require('../models/HomeModel')

homeModel.create({
    titulo: "Um titulo de teste",
    descricao: "Uma descrição de teste"
}).then(dados => console.log(dados))

exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) =>{
    res.send('Ei, sou sua nova rota de POST.')
}