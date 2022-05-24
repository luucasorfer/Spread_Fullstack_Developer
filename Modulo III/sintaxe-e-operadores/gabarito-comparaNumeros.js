function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let simNao = 'não ';

	if (num1 === num2) {
		simNao = '';
	}

	return `Os números: ${num1} e ${num2}, ${simNao}são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;

	let comparaDez = 'menor';
	if (soma > 10) {
    comparaDez = 'maior';
	}
  
  let comparaVinte = 'menor';
	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;
}

console.log(comparaNumeros(1, 11));