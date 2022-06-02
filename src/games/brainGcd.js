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

const brainGcd = () => {
  const firstOperand = Math.floor(Math.random() * 100);
  const secondOperand = Math.floor(Math.random() * 100);

  const correctAnswer = findGcd(firstOperand, secondOperand);
  return [`${firstOperand} ${secondOperand}`, correctAnswer];
};

const brainGcdGame = () => playGame(description, brainGcd);

export default brainGcdGame;
