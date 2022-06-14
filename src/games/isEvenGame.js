import generateRandomInt from '../utils.js';

import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const defaultMaxRandomNumber = 100;

const isEven = (number) => number % 2 === 0;

const generateEvenGame = () => {
  const randomNumber = generateRandomInt(defaultMaxRandomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;

  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateEvenGame);

export default startGame;
