// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const brainEvenGame = () => playGame(description, isEven);

export default brainEvenGame;
