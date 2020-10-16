console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/*Exercicio de interpretação de códigos

Exercicio 1:

Faz a impressão no prompt para que o usuário informe o valor da cotação do dolar.
No console imprime o valor em reais após converter pelo valor da cotação multiplicado por 100.

Exercicio 2:

A função vai mostrar qual será o valor do investimento de acordo com a opção escolhida.
Caso a opção escolhida não se enquadre nas opções descritas no código(poupança, renda fixa, CDB ou ações),
a resposta de retorno que teremos será: "TIPO DE INVESTIMENTO INFORMADO INCORRETO".
Nos casos que foram solicitadas a impressão no console teremos no valor do novoMontante o valor de 150 
multiplicado pelo investimento de "ações" e no caso segundoMontante o valor retornado será indefinido 
pois não foi especificada a opção de "Tesouro Direto" 

Exercicio 3:

A impressão no console ficara a seguinte: no primeiro teremos a frase "Quantidade total de numeros 14" pois 
temos a definição de uma string seguida da impressão da quantidade total do compimento do array que foi dado de exemplo.
No próximo console.log teremos a impressão da quantidade de numeros pares contidos dentro do array ( array1 ),
e no terceiro console.log teremos a quantidade total de numeros não pares contidos dentro do array (  array2).

Exercício 4 */


// Exercícios de Lógica de Programação

// Exercício 1

// primeira maneira
//const lista = ["Bruna", "Davi", "Lu"]
// let index = 0

// while (index < lista.length) {
//     console.log(lista[indice])
//     indice = indice+1
// }

// segunda maneira
//const lista = ["Bruna", "Davi", "Lu"]
//  let index = 0

//  for (let index = 0; index < lista.length; index++) {
//     console.log(lista[index]);   
// }

// terceira maneira
//const lista = ["Bruna", "Davi", "Lu"]

// for (const elemento of lista) {
//     console.log(elemento)
// }

// Exercício 2

// a. false
// b. false
// c. true
// d. true
// e. true

// Exercício 3

//const quantidadeDeNumerosPares = 10
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i = i+1
// }

// Exercicio 4

let ladoA = 3
let ladoB = 2
let ladoC = 3

if (ladoA === ladoB && ladoA === ladoC && ladoC === ladoB ) {
    console.log("Equilatero")
    
} else if (( ladoA === ladoB && ladoA !== ladoC) || (ladoA === ladoC && ladoA !== ladoB) || (ladoB === ladoC && ladoB!== ladoA) ) {
    console.log("Isosceles")
} else {
    console.log("escaleno")        
    
}

// Exercício 5

let numero1 = 5
let numero2 = 50

if (numero1 > numero2) {
    console.log(`O maior é:${1}`)
} else {
    console.log(`O maior é:${2}`)
    
}

if (numero1 % numero2 === 0) {
    console.log (`${numero1} é divisivel por${numero2}`)
} else {
    console.log (`${numero1} não é divisivel por${numero2}`)
}

if (numero2 % numero1 === 0) {
    console.log (`${numero2} é divisivel por${numero1}`)
} else {
    console.log (`${numero2} não é divisivel por${numero1}`)
}

if (numero1 - numero2 < 0) {
    console.log(`A diferença entre eles é ${(numero1 - numero2) * (-1)}`)
    
} else {console.log(`A diferença entre eles é ${(numero1 - numero2)}`)
    
    
}

// EXERCÍCIOS DE FUNÇÕES

//Exercício 1

// Exercício 2

//function funcao1() {
   // alert("Hello Future4");
//}
let alerta = () => {
     alert("Hello Future4");
     }
    
     alerta()

// EXERCÍCIO DE OBJETOS

//Exercício 1
/* Objetos são estruturas de sintaxe. Com eles representamos dados mais complexos,
de uma maneira mais organizada, criando modelos reais de forma mais intuitiva e 
humanizada.  Um objeto é uma coleção de propriedades, e uma propriedade é uma associação 
entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é 
então considerada um método do objeto.
O conceito de objetos em JavaScript pode ser entendido com objetos tangíveis da vida real.
Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. 
Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades.
 Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, 
objetos em JavaScript podem ter propriedades, que definem suas características.
O conjunto de propriedades e métodos de um objeto é chamado de protótipo do objeto.
Ele é muito útil quando formos utilizar o mesmo objeto em situações diferentes:
○ DOM - ex: método getElementById()
○ Array - ex: método push()
○ String - ex: propriedade lenght;
Protótipo do array:  o array permite que guardemos mais de uma informação ao mesmo tempo.
A diferença primordial com os objetos comuns é que o array permite que guardemos as
informações de uma forma ordenada.*/

// Exercício 2
// Exercício 3

const filme = {
    titulo: 'Patch Adams',
    ano: 1998,
    diretor: 'Tom Shadyac',
    atores: ["Robin Willians", "Monica Potter"],
    
}

console.log(`Venha assistir o filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}, estrelado por ${filme.atores}.`)

// Exercício 4

const pessoa = {
    nome: "Phil Dunphy",
    idade: 53,
    email: "modernfamily@gmail.com",
    endereço: "Grants Pass Oregon",
}
console.log(pessoa)

const anonimizarPessoa = {
    ...pessoa ,
    nome: "Anonimo"
   
}
     console.log(anonimizarPessoa)


//EXERCÍCIOS DE FUNÇÕES DE ARRAY

// Exercício 1

// a.

/*const maiores = [

    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const callback = (elementos, index, array) => {
    if(elementos.idade > 20) {
        return true
    }
        return false
    
}
 const soAdultos = maiores.filter(callback)
 console.log(soAdultos)*/

 // duvida: como poderia usar o mesmo array fazendo ambos exercicios sem ter que anular um deles.

// b.

const menores = [

    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const callback = (elementos, index, array) => {
    if(elementos.idade < 20) {
        return true
    }
        return false
    
}
 const soMenores = menores.filter(callback)
 console.log(soMenores)


// Exercício 2

const array = [1, 2, 3, 4, 5, 6]


//a. Multiplicar por 2.

//const result = array.map((item) => {
   // return item*2
//})
//console.log(result)

//b. Entradas multiplicadas por 3 e como strings.

//const multiplicaTrês = array.map((item) => {
    //return String(item * 3);
 //})
 //console.log(multiplicaTrês)

//c.Retornar array de strings par/impar.

const retornaArray = array.map((item) => {
    if (item % 2 === 0) {
        console.log(`${item} é par`)
        
    } else {
        console.log(`${item} é impar`)
    }
})


// EXERCICIO 3

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//a. Pode entrar: > 1.5m de altura, > 14 anos e < 60 anos.

//const podeEntrar = pessoas.map(function(item) {
     // if (item.idade > 14 && item.idade < 60 && item.altura >= 1.5){
     //      return item
     //  } 
     //})
    
     // console.log(podeEntrar)

//b. Não pode entrar: < 1.5 de altura, < 14 anos, > 60 anos.

const naoEntra = pessoas.map(function(item) {
    if (item.idade < 14 || item.idade > 60 || item.altura >= 1.5 ) {
        return item
        
    }
})
console.log(naoEntra)

//EXERCÍCIO 4

const consultas = [
	{ nome: "João", genero: "Sr.", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "Sr.", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "Sra.", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "Sra.", cancelada: false, dataDaConsulta: "04/11/2019" }
]
const consultasAgendadas = consultas.map(function(item) {
    if (item.cancelada === false){
        console.log(`Olá, ${item.genero} ${item.nome}. Estamos enviando esta mensagem para ${item.genero} da sua consulta no dia ${item.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
    } else {
        console.log(`Olá, ${item.genero} ${item.nome}. Infelizmente, sua consulta marcada para o dia ${item.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
    }
})



    
    
    