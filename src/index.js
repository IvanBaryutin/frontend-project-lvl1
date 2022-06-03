import readlineSync from 'readline-sync';
import { sayHello } from './cli.js';

// Общая функция запуска игры
const playGame = (description, game) => {
  const numberOfRounds = 3; // Количество раундов

  const userName = sayHello();
  let isWinner = true;
  let answer = '';
  console.log(description);

  for (let counter = 1; counter <= numberOfRounds; counter += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      isWinner = false;
      break;
    }
  }
  if (isWinner === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
