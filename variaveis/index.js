// exercicio interpretação
// resposta 1 = 10
// resposta 2 = 10 10 10

// questão a
let nome 
let suaIdade 
console.log (typeof(nome))
console.log (typeof (suaIdade))
// a variavel não foi definida então a resposta foi undefined

nome = prompt ("qual seu nome")
idade = prompt ("qual sua idade")
// aparece caixa para prencher nome e idade

console.log (typeof(nome))
console.log (typeof(idade))
//prompt reconhece somente texto por isso string

console.log("Olá",nome,"você","tem",idade,"anos.")

// questão 2

fruta = prompt ("qual sua fruta favorita?")
cor = prompt ("qual sua cor favorita?")
filme = prompt ("Qual seu filme favotito?")
cidade = prompt ("Qual cidade você mora?")
comida = prompt ("Qual sua comida favorita?")

console.log ("Minha","fruta","favorita","é",fruta)
console.log ("Minha", "cor","favorita","é", cor)
console.log ("Meu", "filme","favorito","é", filme)
console.log ("Eu","moro","em", cidade)
console.log ("Eu","adoro", comida)

// questão 3
// a
 let pratos = ["sopa", "yaksoba", "sobá", "pizza", "macarrão"]
 console.log (pratos)

// b
console.log("Minhas comidas favoritas")
console.log(pratos[0])
console.log(pratos[1])
console.log(pratos[2])
console.log(pratos[3])
console.log(pratos[4])

//c mudei a variavel por ja ter usado comida no exercicio anterior
var preferido = prompt("Qual seu alimento preferido?")
console.log(pratos[0])
console.log(preferido)
console.log(pratos[2])
console.log(pratos[3])
console.log(pratos[4])

// 4
// a
let perguntas = ["Você esta com fome?","Você gosta de café?","Você tomou banho hoje?"]
let respostas = [true, true, false]
// b
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])

