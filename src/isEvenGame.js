import readlineSync from 'readline-sync';

export const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  let randomNumber = 0;
  let answer = '';
  let correctAnswer = '';
  let winner = true;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 0; counter <= 2; counter += 1) {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
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

export default isEven;
