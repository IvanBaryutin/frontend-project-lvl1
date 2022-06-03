// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'What number is missing in the progression?';

// Функция генерирования массива с прогрессией
const genProgressionArr = (min, max) => {
  const arr = [Math.floor(Math.random() * 10)];
  const arrSize = Math.floor(Math.random() * (max - min) + min);
  const progressionStep = Math.floor(Math.random() * 10);

  for (let i = 0; i < arrSize; i += 1) {
    arr.push(arr[i] + progressionStep);
  }

  return arr;
};

const genProgressionGame = () => {
  const progression = genProgressionArr(5, 15);
  const missedItemIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[missedItemIndex];
  progression[missedItemIndex] = '..';
  return [`Question: ${progression.join(' ')}`, correctAnswer];
};

const startGame = () => playGame(description, genProgressionGame);

export default startGame;
