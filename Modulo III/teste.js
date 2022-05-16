// Este é o comentario de uma linha, o atalho é CTRL+;

/* Este é um comentario
de várias linhas, 
o atalho é SHIFT+ALT+A */

/* 
//var (variaveis) = São valores que podem receber alterações.
var desconto = 0.2;
// const (constantes) = São valores que não podem receber alterações.
const PRECO = 2;

var total = PRECO - desconto; */

// -------------------

/* // Declarando a função
function soma(a, b) {
  // console.log(a + b); Utilizado em debugs
  return a + b; // 8
}

soma(3, 5); // Chamando uma função !impotante */

// -------------------


function returnEvenValues(array) {
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else{
      oddNums.push(array[i]);
    }
  }

  console.log('Os numeros pares são:   ', evenNums);
  console.log('Os numeros impares são: ', oddNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

returnEvenValues(array);