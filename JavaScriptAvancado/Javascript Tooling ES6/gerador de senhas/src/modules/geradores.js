const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
//Usando o fromCharCode, que ele retorna um caractere de uma tabela, que geramos esse valor aletoriamente, seguindo um padrão que colocamos
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;~^[]{}!@#$%()_+=-'
const geraSimbolos = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = []
    qtd = Number(qtd)
//esse for adiciona o caractere no array quando percebe que o primeiro argumento e considerado verdade
    for(let i = 0; i < qtd; i++){
    //Os caracteres dessa função retornaram uma sequencia
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolos())
    }
//isso aqui ira defenir um limite porque toda vez que rodarmos o "for" iremos aumentar a quantidade
    return senhaArray.join(''.slice(0, qtd))
}
