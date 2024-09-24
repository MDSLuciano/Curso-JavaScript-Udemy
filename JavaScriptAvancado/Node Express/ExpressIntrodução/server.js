const express = require('express')
const app = express()
//CRUD -> Create, Read, Update, Delete
//         POST    GET   PUT    DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>Enviar</button>    
    `)
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gente!')
})

app.listen(3000, () =>{
    console.log("http://127.0.0.1:3000");
    console.log('O servidor esta executando na porta 3000');
})