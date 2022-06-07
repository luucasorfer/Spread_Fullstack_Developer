// var e let

// var = Possui um escopo global. Define em um endereço lógico o valor da variável.
// let = Possui um escopo de bloco. Define em um endereço lógico o valor da variável somente no bloco em que se encontra.
// ----
// Declaração = Necessita da palavra reservada(var, let, const)
// Atribuição = Não usa a palavra reservada(var, let, const)
// Atribuição (hoisting) = Pode ser usada somente com ´var´. Não usa a palavra reservada. Só é aplicável se a variavel nao foi declarada anteriormente
// Redeclaração = Necessita da palavra reservada, so pode ser utilizada com var ou const
// Reatribuição = Não usa a palavra reservada(var, let, const), define um novo valor
// ----

var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // Alterando o valor da variavel no mesmo endereço
  let b = 22; // Possui um escopo local. Define em um endereço lógico dentro do bloco if.
  console.log('No escopo de bloco (if-block):', a, b); // 11 22
}
console.log('No escopo de global:', a, b); //11 2
console.log('----');

// ----
firstName = 'João'; // Atribuição (hoisting) -> definindo um valor em escopo global
var lastName = 'Souza'; // Declarando -> definindo um ponto lógico na memória e atribuindo um valor em escopo global

console.log('Recebendo os valores em escopo global (sem alterações):', firstName, lastName); // João Souza

if (firstName === 'João') { // condicional
  var firstName = 'Pedro'; // Redeclarando -> mantendo o ponto lógico na memória e atribuindo um valor em escopo global
  let lastName = 'Rodrigues'; // Declarando -> definindo um ponto lógico na memória e atribuindo um valor(let = somente no escopo do bloco (IF))
  lastName = 'Gonçalves' // Reatribuindo -> definindo um novo valor

  console.log('No escopo de bloco (if-block):', firstName, lastName); // Pedro Gonçalves
}

console.log('No escopo de global:', firstName, lastName); // Pedro Souza