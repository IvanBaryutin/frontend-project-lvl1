import readlineSync from 'readline-sync';

const RoundsCount = 3; // Количество раундов

// Общая функция запуска игры
const playGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let counter = 1; counter <= RoundsCount; counter += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    // if (answer === String(correctAnswer)) {
    console.log('Correct!');
    // }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
