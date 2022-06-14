import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const defaultMaxRandomNumber = 100;

const findGcd = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return findGcd(b, c);
  }
  return a;
};

const generateGcdGame = () => {
  const firstOperand = generateRandomInt(defaultMaxRandomNumber);
  const secondOperand = generateRandomInt(defaultMaxRandomNumber);

  const correctAnswer = findGcd(firstOperand, secondOperand);
  const question = `${firstOperand} ${secondOperand}`;
  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateGcdGame);

export default startGame;
