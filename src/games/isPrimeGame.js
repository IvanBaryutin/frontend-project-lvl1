import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const defaultMaxRandomNumber = 100;

// Функция проверки числа на простое число
const isPrime = (num) => {
  if (num < 2) { return false; }
  let res = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};

export const generatePrimeGame = () => {
  const randomNumber = generateRandomInt(defaultMaxRandomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generatePrimeGame);

export default startGame;
