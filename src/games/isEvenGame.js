// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genEvenGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = randomNumber;

  return [question, correctAnswer];
};

const startGame = () => playGame(description, genEvenGame);

export default startGame;
