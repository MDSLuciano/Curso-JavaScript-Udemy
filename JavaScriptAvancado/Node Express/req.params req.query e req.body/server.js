const express = require('express')
const app = express()

//Isso aqui serve para fazer o tratamento dos dados passado nos formularios.
app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>Enviar agora</button>    
    `)
});
//Quando por exemplos colocamos os dois pontos" : ", podemos pegar o valor no corpo da requisição
//e trabalhar com os dados gerados.
//? o interrogação serve que o valor na frente do ultimo barra se torne opcional
app.get('/testes/:idUsuarios?/:parametros?', (req, res) =>{
    // /profiles/3
    // /profiles/?chave1=valor&chave2=valor&chave3=valor //podemos passar os parametros na url, para cada informação passada precisamos adicionar o & para fazer a separação da informação.
    console.log(req.params);//Isso retorna uma string
    console.log(req.query);//Isso retorna um json dos parametros
    res.send(req.params)
})

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`)//Isso se da pelo formulário o metodo seria o name passado no input
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gente!')
})

app.listen(3000, () =>{
    console.log("http://127.0.0.1:3000");
    console.log('O servidor esta executando na porta 3000');
})