let currentNumber = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
  currentNumber++;
  CURRENT_NUMBER.innerHTML = currentNumber;
}

function decrement() {
  currentNumber--;
  CURRENT_NUMBER.innerHTML = currentNumber;
}

function test() {
  "Testando 1, 2, 3!";
}

console.log(test);