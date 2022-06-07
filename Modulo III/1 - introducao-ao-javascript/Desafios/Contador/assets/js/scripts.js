const COUNTER = document.querySelector('.counter')
const CURRENT_NUMBER = document.querySelector('.currentNumber')

let currentNumber = 0

/* Aumenta ou diminui o valor ao clicar nos botões
Não altera o valor se for maior que 10 ou menor que -10 */
COUNTER.addEventListener('click', (e) => {
  if (e.target.classList.contains('adicionar') && CURRENT_NUMBER.textContent < 10) {
    currentNumber++
    CURRENT_NUMBER.textContent = currentNumber
  } else if (e.target.classList.contains('subtrair') && CURRENT_NUMBER.textContent > -10) {
    currentNumber--
    CURRENT_NUMBER.textContent = currentNumber
  }
})

/* Altera cor do contador de acordo com o valor */
COUNTER.addEventListener('click', (e) => {
  if (CURRENT_NUMBER.textContent == 0) {
    CURRENT_NUMBER.style.color = 'black'
  } else if (CURRENT_NUMBER.textContent >= 0) {
    console.log("Positivo")
    CURRENT_NUMBER.style.color = '#006100'
  } else {
    console.log("Negativo")
    CURRENT_NUMBER.style.color = '#9C0006'
  }
})