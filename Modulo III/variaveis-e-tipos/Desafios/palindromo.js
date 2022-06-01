
function verificaPalindromo(string) {
  if (!string) return "String inexistente";

  console.log(
    string.split("").reverse().join("") === string
    );
}

verificaPalindromo("radar")