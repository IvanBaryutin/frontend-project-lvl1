import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';
const defaultProgressionLength = 9;
const defaultMaxProgressionStep = 10;
const defaultMaxValue = 100;

const generateProgression = (firstElementValue, progressionStep, length) => {
  const progression = [firstElementValue];
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

const generateProgressionGame = () => {
  const firstProgressionElementValue = generateRandomInt(defaultMaxValue);
  const progressionStep = generateRandomInt(defaultMaxProgressionStep);
  const progression = generateProgression(
    firstProgressionElementValue,
    progressionStep,
    defaultProgressionLength,
  );
  const missedItemIndex = generateRandomInt(progression.length);
  const correctAnswer = progression[missedItemIndex];
  progression.splice(missedItemIndex, 1, '..');
  const question = `Question: ${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

const startGame = () => playGame(description, generateProgressionGame);

export default startGame;
