// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return findGcd(b, c);
  }
  return a;
};

const genGcdGame = () => {
  const firstOperand = Math.floor(Math.random() * 100);
  const secondOperand = Math.floor(Math.random() * 100);

  const correctAnswer = findGcd(firstOperand, secondOperand);
  const question = `${firstOperand} ${secondOperand}`;
  return [question, correctAnswer];
};

const startGame = () => playGame(description, genGcdGame);

export default startGame;
