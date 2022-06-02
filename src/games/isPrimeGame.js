import readlineSync from 'readline-sync';

export const isPrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let randomNumber = 0;
  let answer = '';
  let correctAnswer = '';
  let winner = true;

  const isPrimeNumber = (num) => {
    let res;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        res = false;
        break;
      }
      res = true;
    }
    return res;
  };

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let counter = 0; counter <= 2; counter += 1) {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
      winner = false;
      break;
    }
  }
  if (winner === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default isPrime;
