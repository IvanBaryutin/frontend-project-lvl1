import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const defaultMaxRandomNumber = 100;

// Функция калькуляции выражения
const calculate = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+': return firstOperand + secondOperand;
    case '-': return firstOperand - secondOperand;
    case '*': return firstOperand * secondOperand;
    default: throw new Error(`Unknown math operation: '${operation}'!`);
  }
};

const generateCalcGame = () => {
  const firstOperand = generateRandomInt(defaultMaxRandomNumber);
  const secondOperand = generateRandomInt(defaultMaxRandomNumber);
  const operation = operations[generateRandomInt(operations.length)];
  const correctAnswer = calculate(firstOperand, secondOperand, operation);
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateCalcGame);

export default startGame;
