// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (firstOperand, secondOperand, operation) => {
  // let answer = 0;
  switch (operation) {
    case '+': return firstOperand + secondOperand;
    case '-': return firstOperand - secondOperand;
    case '*': return firstOperand * secondOperand;
    default: throw new Error(`Unknown math operation: '${operation}'!`);
  }
};

// Функция калькуляции выражения
const generateCalcGame = () => {
  const operations = ['+', '-', '*'];
  const firstOperand = Math.floor(Math.random() * 100);
  const secondOperand = Math.floor(Math.random() * 100);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const correctAnswer = calculate(firstOperand, secondOperand, operation);
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateCalcGame);

export default startGame;
