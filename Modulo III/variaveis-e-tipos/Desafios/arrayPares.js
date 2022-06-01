let array = [];

function substituiPares(array) {
  if (!array) array = -1;
  if (!array.length) array = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) console.log("Valor é 0");
      else if (array[i] % 2 === 0) array[i] = 0;
    }
  console.log(array);
}
substituiPares(array);