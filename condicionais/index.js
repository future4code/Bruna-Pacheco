//console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//interpretação de código

// exercicio 1
//o código imprime na tela a mensagem que pede pro user digitar um numero para testar.
//caso o numero seja par a mensagem recebida é passou no teste.
//caso o numero seja impar a mensagem é não passou o teste

//exercicio 2
//a. o código nos mostra o valor da fruta que foi selecionada pelo usuario;
//b. O preço da fruta maçã é R$ 2,25;
//c. O preço da fruta pêra é R$ 5,00;

//exercicio 3
//a. Pedindo ao usuário para digitar um numero.
//b.Caso o usuário digite 10 a mensagem será: "esse número passou no teste", ja que 10 é >0.
//c.Digitando o valor -10 apresentará erro tento em vista que a mensagem para ele não esta definida.
// Isso acontece pois não conseguimos acessar a variavel que esta fora do escopo para gerar a resposta.

//ESCRITA DE CÓDIGO

//Exercício 4
let numero = Number(prompt("Qual sua idade?"))

if(numero > 17) {
  console.log("Você pode dirigir!")
} else if (numero < 18){
  console.log("Você NÃO pode dirigir!")
 }

 //Exercício 5
 let turnoDeOrigem = prompt("Qual turno você estuda: M, T ou N?")
 if (turnoDeOrigem === "M"){
    console.log ("Bom Dia!")
} else if (turnoDeOrigem ==="V"){
    console.log ("Boa Tarde!")
} else if (turnoDeOrigem === "N"){
    console.log ("Boa Noite!")
}

//Exercício 6
let horaDeEstudo = prompt("Qual horário você estuda: m, t ou n?")
switch (horaDeEstudo){
    case 'm':
        console.log('Bom Dia Humano!')
        break
    case 't':
        console.log('Boa Tarde Humano!')
        break
    case 'n':
        console.log("Boa Noite Humano!")
        break
    default:
        console.log("Você surtou?:/")  
        break     
}

//Exercício 7

let filmeFantasia = prompt("Filme Fantasia?")
let menorDe15 = prompt ("Quanto custa?")


 if (filmeFantasia === "sim" && menorDe15 <15) {
     console.log("Bom Filme")
} else if (filmeFantasia === "não" || menorDe15 > 15 ){
    console.log("Escolha outro filme")
 }
