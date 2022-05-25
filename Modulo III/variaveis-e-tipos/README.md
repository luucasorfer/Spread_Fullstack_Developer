# Variáveis e Tipos

Neste repositório você encontrará a atividades práticas propostas pelo curso "Variáveis e Tipos" do Basecamp de Javascript utilizado no bootcamp [Spread Fullstack Developer](https://www.dio.me/bootcamp/spread-fullstack-developer) da [DIO._ (Digital Inovation One)](https://www.dio.me/) 

# var, let e const

> _**OBS: var, let e const são palavras reservadas, ou seja, não poder ser usadas como nome de variáveis._

|           |       var       |    const    |     let     |
|-----------|-----------------|-------------|-------------|
| escopo    | global ou local |    bloco    |    bloco    |
| redeclarar|       sim       |  _**não**_  |  _**não**_  |
| reatribuir|       sim       |  _**não**_  |     sim     |
| hoisting  |       sim       |  _**não**_  |  _**não**_  |

 - **Declaração**: Necessita da palavra reservada, define um ponto na memória que será ocupado
 pela variável;
 >Ex: var a;
---
 - **Atribuição**: Não usa a palavra reservada, adiciona um valor a variável;
 >Ex ¹: var a = 1;<br>
 >Ex ²:  var a; <br>
 >	  a = 1;
---
 - **Hoisting**: Pode ser usada somente com o _´var´_, não usa a palavra reservada,
 só é aplicável se a variável não foi declarada anteriormente;
 >Ex: firstName  =  'João';<br>
 >	   console.log(firstName); // João
---
 - **Redeclarar**: Necessita da palavra reservada, so pode ser utilizada com var;
 - **Reatribuir**: Não usa a palavra reservada, so pode ser utilizada com var, define um novo valor.
>Ex:<br>
><br>
>  a  =  1;  // **Hoisting**<br>
>  var  b  =  2;  // **Declaração** e **atribuição**<br>
> <br>
>if (a  ===  1) {<br>
	>var  a  =  11; // **Reatribuindo** o valor da variável<br>
	>let  b  =  22; // **Reatribuindo** o valor da variável, _let_ <br>possui escopo de bloco. <br>
	>console.log('No escopo de bloco de código (if-block):', a, b); // 11, 22<br>
>}<br>
>console.log('No escopo de global:', a, b); //11, 2

## Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa
(ex.: raiar, ama, ovo, radar)_

## Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0.
Se o array for vazio, retorne -1.

Exemplo:

Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []
Output -> -1