exports.paginaInicial = (req, res) => {
    //Criamos como se fosse uma sessão na mão para ver o dado sendo armazenado.
    // req.session.usuario = { nome:'Luciano', logado: true }

    //Exemplo de Flash Messages
    //Primeiro parâmetro é aonde iremos buscar essa informação depois, e o segundo é a mensagem enviada ao front
    // req.flash('info', 'Ola mundo')
    // req.flash('error', 'Uma mensagem de erro')
    // req.flash('sucess', 'Deu certo')
    //Esse recurso tem a ideia de exibir o tipo de flag e a mensagem mas a mensagem é temporária assim que atualizar a página as Flash irá desaparecer.
    res.render('index')
}

exports.trataPost = (req, res) =>{
    res.send('Ei, sou sua nova rota de POST.')
}