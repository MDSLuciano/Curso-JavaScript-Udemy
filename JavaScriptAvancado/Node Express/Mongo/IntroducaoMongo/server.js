require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)//Fazendo a conexão com o banco de dados do Mongoose
    .then(()=> {
        app.emit('pronto')//Serve para a aplicação funcionar somente depois que o Mongoose conectar, porque ele demora um certo tempo até ser iniciado
    }).catch(e => console.log(e))


const routes = require('./routes')
const path = require('path')//serve quando temos aplicações em sistema operacionais diferentes, desse jeito ele corrige o caminho

app.use(express.urlencoded({ extended:true }))
app.use(express.static(path.resolve(__dirname, "public")))//Definindo a pasta padrão para a visualização do cliente

app.set('views', path.resolve(__dirname,'src', 'views'))//.set serve para setar a pasta com o que queremos trabalhar nela.
app.set('view engine', 'ejs')


app.use(routes)//Para usar a minha aplicação na pasta routes

app.on('pronto', ()=>{ //Isso server quando o server do mongoose ser iniciado
    app.listen(3000, () =>{
        console.log("http://127.0.0.1:3000");
        console.log('O servidor esta executando na porta 3000');
    })
})
