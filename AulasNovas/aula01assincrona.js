



function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(msg);
            
        },tempo)
    })
    
}

// espera('frase 1', 1000)
//     .then(resposta =>{
//         console.log(resposta);
//         return espera('Frase 2',1000)
//     })
//     .then(resposta =>{
//         console.log(resposta);
//         return espera('Frase 3', 1000)
//     })
//     .then(resposta =>{
//         console.log(resposta);
//     })

//Promise.all Promise.race Promise.resolve Promise.reject
//Promise.all ele vai retornar o valor somente quando todas as promessas forem compridas
//Promise.race ele vai retornar somente a promessa mais rapida
//Promise.resolve podemos colocar uma promessa para ser resolvida, com uma condicional

function baixaPagina() {
    const emCache = true

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return espera('Baixei a Página', 3000)
    }
}

baixaPagina()
    .then(dadospagina =>{
        console.log(dadospagina);
        
    })
    .catch(e => console.log(e))



// const promises = [
//     'Primeiro valor',
//     espera('Promise 1', 3000),
//     espera('Promise 2', 5000),
//     espera('Promise 3', 8000),
//     'Outro valor'
// ];

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     }).catch(function (erro) {
//         console.log(erro);
//     })