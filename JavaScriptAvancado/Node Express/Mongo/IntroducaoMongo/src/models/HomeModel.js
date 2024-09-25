const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({     //Criando o Schema do mongoose para fazer os tratamentos dos dados
    titulo: { type:String, required: true},
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home