import readlineSync from 'readline-sync';
import { sayHello } from './cli.js';

// Общая функция запуска игры
const playGame = (description, game) => {
  const numberOfRounds = 3; // Количество раундов

  const userName = sayHello();
  let winner = true;
  let answer = '';
  console.log(description);

  for (let counter = 1; counter <= numberOfRounds; counter += 1) {
    const [randomNumber, correctAnswer] = game();
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
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

export default playGame;
