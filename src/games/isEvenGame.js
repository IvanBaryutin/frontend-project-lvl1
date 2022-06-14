import generateRandomInt from '../utils.js';

import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateEvenGame = () => {
  const randomNumber = generateRandomInt(100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;

  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateEvenGame);

export default startGame;
