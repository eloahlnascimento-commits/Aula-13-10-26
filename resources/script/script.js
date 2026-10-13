// Arrys
let nomes = [" Ana Paula", "Ana","Ricardo Vieira Santana","Pedro", "joana","Evandro","Ana Cássia"];

//push, pop, unshift e shift

//fiter
// let nomePesquisa = prompt("digite o nom da pesquisa:")
 
// let listafiltradas = nomes.filter( nome =>
//    nome.toLowerCase() === nomePesquisa.toLowerCase().trim()
// );


// let nome = ["Miguel Ângelo", "Maria Eduarda","joão Pedro","Ana Clara","Pedro Henrique","Maria Alice","Luiz Felipe",
//     "Ana Júlia","João Miguel","Maria Cecília"
// ];

 //let nomesPesquisa = prompt("Digite o nome:");
 //let listafiltrada = nomes.filter(nome =>
  //  nome.toLocaleLowerCase().startsWith(nomesPesquisa.toLowerCase())
// );

//console.log(listafiltrada);
//starwith()
//edwith()
//includes()

let numeros = [];

for (let i = 1; i <= 20; i++) {
    numeros.push(i);
}

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pares);