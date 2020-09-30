console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")


// INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// a. O que vai ser impresso no console?
// Resposta: será impresso no console os valores 5 e 10.

// b. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
// O que apareceria no console?
// //

// EXERCÍCIO 2

// a. Explicite quais são as saídas impressas no console
// Resposta: Darvas e Goli (pela definição do i <2)

//b.Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
// Resposta: Amanda e Caio, pois a definição do i permaneceu <2.

//EXERCÍCIO 3
//não entendi!!


// ESCRITA DE CÓDIGO

// EXERCÍCIO 4

// a.

function souEu (){
    console.log ("Eu sou Bruna, tenho 7 anos, moro em MS e sou bailarina.");
}
souEu()


// b.

let nome,
	idade, 
	cidade,
	estudante;

const minhasInfo = (nome, idade, cidade, estudante) => {

	if (estudante === true) {
		estudante = "Sou Estudante!"
	} else {
		estudante = "Não sou estudante!"
	}
	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} ${estudante}`)
}
minhasInfo ("Bruna", 36, "Campo Grande", false)

//EXERCÍCIO 5

//a.

function doisNumeros(a , b) {
	const soma = a+b
	console.log(soma)
}
doisNumeros(10 , 10 )

//b.
//

//c.

 let valor = 0
 for(let i = 0; i<10; i++){
	 valor += i
	 console.log ("Meu pai que trem difícil de entender!!")
 }


// EXERCICIO 6

// a.

const arrayDeNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

const outraFuncao = function(array) {
	for (let i = 0; i < 10; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNumeros)
console.log(arrayDeNumeros.length)

// b.
//

// c.
//

// d.
//








