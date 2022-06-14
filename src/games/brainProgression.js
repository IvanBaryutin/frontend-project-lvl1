// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'What number is missing in the progression?';

// Функция генерирования массива с прогрессией
const generateProgressionArr = (minArraySize, maxArraySize) => {
  const arr = [Math.floor(Math.random() * 10)];
  const arrSize = Math.floor(Math.random() * (maxArraySize - minArraySize) + minArraySize);
  const progressionStep = Math.floor(Math.random() * 10);

  for (let i = 0; i < arrSize; i += 1) {
    arr.push(arr[i] + progressionStep);
  }

  return arr;
};

const generateProgressionGame = () => {
  const progression = generateProgressionArr(5, 15);
  const missedItemIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[missedItemIndex];
  progression[missedItemIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateProgressionGame);

export default startGame;
