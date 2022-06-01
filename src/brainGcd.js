import readlineSync from 'readline-sync';

export const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let answer = 0;
  let firstOperand = 0;
  let secondOperand = 0;
  let correctAnswer = '';
  let winner = true;

  console.log('Find the greatest common divisor of given numbers.');

  const findGcd = (a, b) => {
    if (b !== 0) {
      const c = a % b;
      return findGcd(b, c);
    }
    return a;
  };

  for (let counter = 0; counter <= 2; counter += 1) {
    firstOperand = Math.floor(Math.random() * 100);
    secondOperand = Math.floor(Math.random() * 100);
    console.log(`Question: ${firstOperand} ${secondOperand}`);
    correctAnswer = findGcd(firstOperand, secondOperand);
    answer = readlineSync.question('Your answer: ');
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

export default brainGcd;
