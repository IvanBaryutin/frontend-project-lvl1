// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция проверки числа на простое число
const isPrimeNumber = (num) => {
  let res;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      res = false;
      break;
    }
    res = true;
  }
  return res;
};

export const isPrime = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const brainPrimeGame = () => playGame(description, isPrime);

export default brainPrimeGame;
