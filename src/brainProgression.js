import readlineSync from 'readline-sync';

export const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let answer = 0;
  let correctAnswer = '';
  let winner = true;

  const genProgressionArr = (min, max) => {
    const arr = [Math.floor(Math.random() * 10)];
    const arrSize = Math.floor(Math.random() * (max - min) + min);
    const progressionStep = Math.floor(Math.random() * 10);

    for (let i = 0; i < arrSize; i += 1) {
      arr.push(arr[i] + progressionStep);
    }

    return arr;
  };

  for (let counter = 0; counter <= 2; counter += 1) {
    const progression = genProgressionArr(5, 15);
    const missedItemIndex = Math.floor(Math.random() * progression.length);

    correctAnswer = progression[missedItemIndex];
    progression[missedItemIndex] = '..';
    console.log('What number is missing in the progression?');
    console.log(`Question: ${progression.join(' ')}`);

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

export default brainProgression;
