// import readlineSync from 'readline-sync';

import playGame from '../index.js';

const description = 'What is the result of the expression?';

const RandomCalculate = (a, b, oper) => {
  let answer = 0;
  switch (oper) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      answer = null;
      break;
  }
  return answer;
};

// Функция калькуляции выражения
const Calc = () => {
  const operations = ['+', '-', '*'];
  const firstOperand = Math.floor(Math.random() * 100);
  const secondOperand = Math.floor(Math.random() * 100);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const correctAnswer = RandomCalculate(firstOperand, secondOperand, operation);
  return [`${firstOperand} ${operation} ${secondOperand}`, correctAnswer];
};

const brainCalcGame = () => playGame(description, Calc);

export default brainCalcGame;
