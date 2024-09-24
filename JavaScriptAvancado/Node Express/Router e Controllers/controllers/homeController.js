exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>Enviar agora</button>    
    `)
}

exports.trataPost = (req, res) =>{
    res.send('Ei, sou sua nova rota de POST.')
}