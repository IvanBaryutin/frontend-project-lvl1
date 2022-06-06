// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'What is the result of the expression?';

const generateRandomCalculation = (firstOperand, secondOperand, operation) => {
  let answer = 0;
  switch (operation) {
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default:
      answer = null;
      break;
  }
  return answer;
};

// Функция калькуляции выражения
const generateCalcGame = () => {
  const operations = ['+', '-', '*'];
  const firstOperand = Math.floor(Math.random() * 100);
  const secondOperand = Math.floor(Math.random() * 100);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const correctAnswer = generateRandomCalculation(firstOperand, secondOperand, operation);
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  return [question, correctAnswer];
};

const startGame = () => playGame(description, generateCalcGame);

export default startGame;
