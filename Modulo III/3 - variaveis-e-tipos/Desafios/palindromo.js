//Solução 1
function verificaPalindromo(string) {
  if (!string) return "Nenhum dado recebido";

  console.log(
    string.toLowerCase().split("").reverse().join("") === string.toLowerCase() ? "Palíndromo encontrado!" : "Não é um palíndromo"
  );
}
verificaPalindromo("Radar")

//---

//Solução 2
function verificaPalindromo2(string) {
  if (!string) return "Nenhum dado recebido";

  for (let i = 0; i < string.length / 2; i++)
    if (string[i] !== string[string.length - 1 - i]) console.log("Não é um palíndromo");
  console.log("Palíndromo encontrado!");
}
verificaPalindromo2("radar");