const fs = require('fs').promises

module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, {flag: 'w'})
}

//Isso irá criar um arquivo e irá colocar o json,e objeto passado
//é para apagar o que está escrito e escrever o segundo argumento.

