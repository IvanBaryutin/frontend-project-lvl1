// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция проверки числа на простое число
const isPrimeNumber = (num) => {
  let res = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};

export const genPrimeGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const startGame = () => playGame(description, genPrimeGame);

export default startGame;
