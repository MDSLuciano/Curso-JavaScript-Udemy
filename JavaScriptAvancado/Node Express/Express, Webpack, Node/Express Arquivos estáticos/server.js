const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')//serve quando temos aplicações em sistema operacionais diferentes, desse jeito ele corrige o caminho

app.use(express.urlencoded({ extended:true }))

app.set('views', path.resolve(__dirname,'src', 'views'))//.set serve para setar a pasta com o que queremos trabalhar nela.
app.set('view engine', 'ejs')


app.use(routes)//Para usar a minha aplicação na pasta routes

app.listen(3000, () =>{
    console.log("http://127.0.0.1:3000");
    console.log('O servidor esta executando na porta 3000');
})