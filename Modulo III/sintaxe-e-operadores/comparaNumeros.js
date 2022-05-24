function comparaNumeros(num1, num2) {
  const frase1 = criafrase1(num1, num2);
  const frase2 = criafrase2(num1, num2);

  return `${frase1} ${frase2}`
}

function criafrase1(num1, num2) {

  let saoIguais = num1 !== num2 ? "não " : "";

  return `Os números: ${num1} e ${num2}, ${saoIguais}são iguais.`;
}

function criafrase2(num1, num2) {
  const soma = num1 + num2;

  const compara10 = soma > 10;
  let resultado10 = compara10 ? 'maior' : 'menor';

  const compara20 = soma > 20;
  let resultado20 = compara10 ? 'maior' : 'menor';

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(1, 11));