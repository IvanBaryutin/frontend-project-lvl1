import readlineSync from 'readline-sync';

export const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let answer = 0;
  let firstOperand = 0;
  let secondOperand = 0;
  const operations = ['+', '-', '*'];
  let operation = '';
  let correctAnswer = '';
  let winner = true;

  console.log('What is the result of the expression?');

  const RandomCalculate = (a, b, oper) => {
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

  for (let counter = 0; counter <= 2; counter += 1) {
    firstOperand = Math.floor(Math.random() * 100);
    secondOperand = Math.floor(Math.random() * 100);
    operation = operations[Math.floor(Math.random() * operations.length)];
    console.log(`Question: ${firstOperand} ${operation} ${secondOperand}`);
    correctAnswer = RandomCalculate(firstOperand, secondOperand, operation);
    answer = readlineSync.question('Your answer: ');
    console.log(correctAnswer);
    console.log(answer);
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      winner = false;
      break;
    }
  }
  if (winner === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCalc;
