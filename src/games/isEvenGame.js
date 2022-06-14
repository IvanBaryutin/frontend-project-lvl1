// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEvenGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = randomNumber;

  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateEvenGame);

export default startGame;
