const fs = require('fs').promises
const path = require('path')


//Isso irá procura um arquivo, mas de uma forma assíncrona
//Combinando com o dirname irá retornar somente o arquivo que eu quero
//path.resolve() funciona da mesma maneira, exceto que trata partes 
//de caminho que começam com / como caminho absoluto.

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e)) 

//Vamos utilizar uma função com await
//ele vai procurar atraves de uma pasta raiz, e nos entregar o que tem naquele arquivo
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

//Iremos utilizar a função stat para saber o que é pasta e o que é arquivo
async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)// Isso ira mandar a minha pasta e também ira mandar os arquivos daquele diretorio
        const stats = await fs.stat(fileFullPath)
        
        if(/\.git/g.test(fileFullPath)) continue        //Retirar os arquivos git
        if(/node_modules/g.test(fileFullPath)) continue //Retirar os arquivos da pasta node_modules

        if(stats.isDirectory()){
            readdir(fileFullPath); //isso irá retornar denovo para a função assim entrando nas pastas e subpastas verificando se tem arquivos lá
            continue; //isso irá verificar se é um diretorio, se for ele não será exibido, e por isso do continue para dar essa exceção e continuar o código
        }

        if(!/\.css$/g.test(fileFullPath)) continue      //Verificar apenas arquivos css

        console.log(fileFullPath);//Isso irá retornar se esse arquivo é ou não é um diretório
    }
}

readdir('/Users/gabrs/OneDrive/Área de Trabalho')