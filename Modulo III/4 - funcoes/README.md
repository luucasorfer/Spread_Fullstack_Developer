# Funções
Neste repositório você encontrará anotações e as atividades práticas propostas pelo curso "Funções" do Basecamp de Javascript utilizado no bootcamp [Spread Fullstack Developer](https://www.dio.me/bootcamp/spread-fullstack-developer) da [DIO._ (Digital Inovation One)](https://www.dio.me/)

## Estruturas
### Definição comum de uma função
> Variáveis criadas dentro de uma função poder ser utilizadas somente dentro da mesma
```js
function nome(parametros){
	//instruções
}
```
---
> Quando invocamos o ``return``, **a função para de ser executada e retorna o valor que vem após ele**.
```js
function nome(parametros){
	//instruções
	return; //valor de retorno
}
```
> OBS** ``return`` pode ou não retornar um valor, dependendo de como foi descrito.

Exemplo:
```js
function soma(a, b){
	return a + b; //valor de retorno
}
soma (1, 2) // 1 + 2 = 3
```
---
### Função anônima
> Uma variável pode armazenar uma função
```js
const soma = function (a, b){
	return a + b; //valor de retorno
}
soma (1, 2) // 1 + 2 = 3
soma (5, 4) // 5 + 4 = 9
```
> Quando uma variável recebe uma função, não é necessário dar um nome para a função pois a variável trabalha como o nome para a função.
---
### Função auto invocável
#### IIFE (Immediately Invoked Function Expression)
> Uma função anônima entre parênteses seguida por outro par de parênteses, que representam a sua chamada
```js
(
function (){
	let name = "Digital Innovation One";
	return name;
}
)();

//Digital Innovation One
```
> Também pode ser utilizada com parâmetros ou armazenada em uma variável
```js
(
function (a, b){
	return a + b; //valor de retorno
}
)(1, 2); // 1 + 2 = 3
```
```js
const soma = (
function (){
	return a + b;
}
)(1, 2); 

console.log(soma); // 1 + 2 = 3
```
---
### Callbacks
> Callback é quando uma função é passada como argumento para outra função

> Utilizando callbacks, você tem maior controle da ordem de chamadas
```js
const calc = function(operacao, num1, num2){
	return operacao(num1, num2);
}

const soma = function(num1, num2){
	return num1 + num2;
}

const sub = function(num1, num2){
	return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub  = calc( sub, 1, 2);

console.log(resultSoma); // 1 + 2 =  3
console.log(resultSub ); // 1 - 2 = -1
```
---
## Parâmetros
### Valores padrão de um parâmetro

> Quando temos uma função em JavaScript e queremos enviar um parâmetro sem intervenção externa, solicitamos que não seja preenchido e alteramos esse parâmetro para um valor padrão.
```js 
Pré-ES2015

function exponencial(array, num){
	if(num === undefined) {
		num = 1;
	}
	
	const result = [];
	
	for (let i = 0; i < array.length; i++){
		result.push(array[i] ** num);
	}
	return result;
}

exponencial([1, 2, 3, 4]);    // [1, 2,  3,  4]
exponencial([1, 2, 3, 4], 4); // [1, 8, 27, 64]
```

```js
Pós-ES2015

function exponencial(array, num = 1){
	const result = [];
	
	for (let i = 0; i < array.length; i++){
		result.push(array[i] ** num);
	}
	return result;
}

exponencial([1, 2, 3, 4]);    // [1, 2,  3,  4]
exponencial([1, 2, 3, 4], 4); // [1, 8, 27, 64]
```
---
# Objeto "arguments"
> É um array, uma coleção de todos os parâmetros passados à função que foi invocada
```js
function findMax() {
	let max = -Infinity;
	
	for(let i =0; i < arguments.length; i++){
	  if(arguments[i] > max) max = arguments[i];
	}
	return max; 
}
findMax(1, 2, 3, 6, 90, 1) // 90
```

Exemplo:
```js
function showArgs(){ 
	return arguments;
}
showArgs(1, 2, [3, 4, 5], "Seis");
/*
Arguments(4) [1, 2, Array(3), 'Seis', callee: ƒ, Symbol(Symbol.iterator): ƒ] {
    "0": 1,
    "1": 2,
    "2": Array(3)
	   [
       "0": 3,
       "1": 4,
       "2": 5
       length:  3
       >[[Prototype]]:  Array(0) 	
       ],
    "3": "Seis"
       >callee:  ƒ showArgs()
       length:  4
   Symbol(Symbol.iterator):  ƒ values()
       >[[Prototype]]:  Object 
}
*/
```