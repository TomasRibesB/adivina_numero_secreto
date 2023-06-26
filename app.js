const readline = require('readline-sync');

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let adivinado = false;

while (!adivinado) {
  const numero = readline.questionInt('Adivina el número secreto (entre 1 y 100): ');

  if (numero === numeroSecreto) {
    console.log('¡Felicitaciones! ¡Has adivinado el número secreto!');
    adivinado = true;
  } else if (numero < numeroSecreto) {
    console.log('El número ingresado es demasiado bajo. Intenta nuevamente.');
  } else {
    console.log('El número ingresado es demasiado alto. Intenta nuevamente.');
  }
}
