const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended:true }))
app.use(routes)//Para usar a minha aplicação na pasta routes

app.listen(3000, () =>{
    console.log("http://127.0.0.1:3000");
    console.log('O servidor esta executando na porta 3000');
})